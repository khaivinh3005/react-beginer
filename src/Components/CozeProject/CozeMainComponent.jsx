// library
import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// component
import CozeSearchComponent from './CozeSearchComponent';
import CozeTabsComponent from './CozeTabsComponent';
import CozeListComponent from './CozeListComponent';
import { URLCoze } from '../API/ConstantAPI';

const CozeMainComponent = () => {
  const [listData, setListData] = useState([]);
  const [tab, setTab] = useState(null);
  const [listDefault, setListDefault] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (tab === 2) {
      const newListData = listData.filter((item) =>
        item.category.includes('Photo')
      );
      console.log('newListData: ', newListData);
      setListData(newListData);
    } else if (tab === 3) {
      const newListData = listDefault.filter((item) =>
        item.category.includes('Web')
      );
      console.log('newListData: ', newListData);
      setListData(newListData);
    } else {
      axios({
        method: 'get',
        url: URLCoze,
        responseType: 'stream',
      })
        .then(async (response) => {
          const dataAPI = JSON.parse(response.data);
          setListData(dataAPI);
          setListDefault(dataAPI);
        })
        .catch((error) => console.log('error : ', error));
    }
  }, [tab]);

  return (
    <Box bg={'#F7F7FA'} w={'85%'} pl={'18px'}>
      <CozeSearchComponent
        listData={listData}
        setListData={setListData}
        value={value}
        setValue={setValue}
      />
      <CozeTabsComponent />
      <CozeListComponent setTab={setTab} listData={listData} />
    </Box>
  );
};

export default CozeMainComponent;

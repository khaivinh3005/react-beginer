import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const CozeSearchComponent = (props) => {
  const { listData, setListData, setValue } = props;

  const handleChangeSort = (value) => {
    if (value === '1') {
      const newListData = listData.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setListData(newListData);
      setValue(value);
    } else {
      const newListData = listData.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      });
      setListData(newListData);
      setValue(value);
    }
  };

  return (
    <Flex
      className='CozeSearchComponent'
      justifyContent={'space-between'}
      alignItems={'center'}
      my={2}
    >
      <Box>Plugins</Box>
      <Flex gap={10}>
        {/* Sort */}
        <Flex className='coze-sort' gap={2}>
          <span>Sort</span>
          <select onChange={(e) => handleChangeSort(e.target.value)}>
            <option value='1'>Popular</option>
            <option value='2'>Recent</option>
          </select>
        </Flex>

        {/* Search */}
        <Flex gap={2}>
          <Input borderColor={'blue'} type='text' />
          <Button>Submit</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CozeSearchComponent;

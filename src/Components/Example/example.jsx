import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const Example = () => {
  //constructor1
  const [tab, setTab] = useState('');
  const [listDS, setListDS] = useState([]);

  useEffect(() => {}, []);

  //2
  return (
    <>
      {/* SHow ra ds dogs */}
      <Button>Tab 1</Button>

      {/* Show ra ds cat */}
      <Button onClick={() => setTab(2)}>Tab 2</Button>
    </>
  );
};

export default Example;

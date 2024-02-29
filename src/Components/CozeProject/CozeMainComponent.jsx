import { Box } from '@chakra-ui/react';
import React from 'react';
import CozeSearchComponent from './CozeSearchComponent';
import CozeTabsComponent from './CozeTabsComponent';
import CozeListComponent from './CozeListComponent';

const CozeMainComponent = () => {
  return (
    <Box bg={'#F7F7FA'} w={'85%'} pl={'18px'}>
      <CozeSearchComponent />
      <CozeTabsComponent />
      <CozeListComponent />
    </Box>
  );
};

export default CozeMainComponent;

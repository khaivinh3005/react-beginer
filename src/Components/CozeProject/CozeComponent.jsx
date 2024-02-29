import React from 'react';
import CozeSideBarComponent from './CozeSideBarComponent';
import CozeMainComponent from './CozeMainComponent';
import { Flex } from '@chakra-ui/react';

import './styles.css';

/**
 *
 * 1: Phân tích UI
 *    1.1 Từ trái sang phải
 *    1.2 trên xuống dưới
 *
 *
 *
 *
 *  */

//  Red
const CozeComponent = () => {
  return (
    <Flex h={'100vh'}>
      {/* Blue(1) */}
      <CozeSideBarComponent />
      {/* Orange(2) */}
      <CozeMainComponent />
    </Flex>
  );
};

export default CozeComponent;

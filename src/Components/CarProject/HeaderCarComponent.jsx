import { DeleteIcon, MoonIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const HeaderCarComponent = (props) => {
  const {
    handleChangeInput,
    handleSearchCar,
    inputNameCar,
    listCar,
    setListCar,
    listCarDefault,
  } = props;

  const sumLike = listCar.reduce(
    (total, item) => (total += item.isLike ? 1 : 0),
    0
  );

  return (
    <Flex justifyContent={'space-around'}>
      <Box className='header-logo'>
        Car Logo
        <Icon as={MoonIcon} />
      </Box>
      <InputGroup size='sm' w={'50%'}>
        <Input
          placeholder='Nhập tên xe cần tìm'
          onChange={(e) => handleChangeInput(e.target.value)}
          onKeyUp={() => {
            if (inputNameCar) {
              handleSearchCar(listCar, inputNameCar);
            } else {
              setListCar(listCarDefault);
            }
          }}
        />
        <Button onClick={() => handleSearchCar(listCar, inputNameCar)}>
          Search
        </Button>
      </InputGroup>
      <Flex className='header-cart' gap={5}>
        <Flex alignItems={'center'}>
          <i className='fa fa-shopping-cart'></i>
          <Text fontSize='sm'>0</Text>
        </Flex>
        <Flex alignItems={'center'}>
          <i className='fa fa-heart'></i>
          <Text fontSize='sm'>{sumLike ? sumLike : ''}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderCarComponent;

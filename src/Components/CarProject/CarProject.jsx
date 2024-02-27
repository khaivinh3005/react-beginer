import React, { useState } from 'react';
import carBenz from '../Image/car-benz.jpeg';
import carBMW from '../Image/car-bmw.jpeg';
import carLexus from '../Image/car-lexus.jpeg';

import { Box, Button, Flex, Input, InputGroup } from '@chakra-ui/react';
import CarItemComponent from './CarItemComponent';
import HeaderCarComponent from './HeaderCarComponent';

// 1. UI
// 2. Viết hàm
//    2.1 Tham số : danh sách xe , tên xe nhập
//    2.2 danh sách tên xe và giá trị nhập : chuyển về chữ thường và xoá dấu cách
//    2.3 Tên xe tìm được => setState
//    2.4 Tìm ko đc thì ko setState

// Global Variable
const infoDefault = {
  id: 1,
  nameCar: 'Xe Benz',
  imageCar: carBenz,
  price: '1000',
};

const listCarDefault = [
  {
    id: 1,
    nameCar: 'Xe Benz',
    imageCar: carBenz,
    price: '1000',
    isLike: false,
    isBuy: false,
    count: 0,
  },
  {
    id: 2,
    nameCar: 'Xe BMW',
    imageCar: carBMW,
    price: '3000',
    isLike: false,
    isBuy: false,
    count: 0,
  },
  {
    id: 3,
    nameCar: 'Xe Lexus',
    imageCar: carLexus,
    price: '1500',
    isLike: false,
    isBuy: false,
    count: 0,
  },
];

const CarProject = () => {
  const [listCar, setListCar] = useState(listCarDefault);
  const [inputNameCar, setInputNameCar] = useState('');

  const handleChangeInput = (value) => {
    const newInput = value.toLowerCase().replace(/\s/g, '');
    setInputNameCar(newInput);
  };

  const handleSearchCar = (listCar, nameCar) => {
    const newListCar = listCar.filter((carItem) => {
      const lowerCaseCarItem = carItem.nameCar.toLowerCase().replace(/\s/g, '');
      //Toàn bộ tên xe trong listCar sẽ remove space và chuyển thành chữ thường

      const result = lowerCaseCarItem.includes(nameCar);
      return result;
    });

    if (newListCar.length > 0) {
      setListCar(newListCar);
    } else {
      setListCar(listCarDefault);
    }
  };

  return (
    <>
      <HeaderCarComponent
        inputNameCar={inputNameCar}
        handleChangeInput={handleChangeInput}
        handleSearchCar={handleSearchCar}
        listCarDefault={listCarDefault}
        listCar={listCar}
        setListCar={setListCar}
      />

      <Flex gap={'10px'}>
        {/* card item */}
        {listCar.map((item, index) => {
          return (
            <CarItemComponent
              item={item}
              key={item.id}
              listCar={listCar}
              setListCar={setListCar}
            />
          );
        })}
      </Flex>
    </>
  );
};

export default CarProject;

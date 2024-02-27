import React, { useState } from 'react';
import carBenz from '../Image/car-benz.jpeg';
import carBMW from '../Image/car-bmw.jpeg';
import carLexus from '../Image/car-lexus.jpeg';
import { Button, Flex } from '@chakra-ui/react';
/**
 * In ra giao diện danh sách xe => danh sách ko thay => ko đặt state
 *
 */
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

const WarningComponent = () => {
  // Toàn bộ dữ liệu thay đổi sẽ để trong hàm này
  const [isOpen, setIsOpen] = useState(false);
  const [carItem, setCarItem] = useState(listCarDefault[0]);
  const [carModalItem, setCarModalItem] = useState(listCarDefault[0]);
  return (
    <>
      <div className={isOpen ? 'openClass' : 'closeClass'}>
        <h1>Danh Sach xe</h1>
        <Flex>
          <div>
            {listCarDefault.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    //1. cập nhật xe ở modal
                    setCarModalItem(item);

                    //2. mở modal đó
                    setIsOpen(!isOpen);
                  }}
                >
                  <h2>{item.nameCar}</h2>
                  <span>{item.price}</span>
                  <img
                    src={item.imageCar}
                    alt={`${item.nameCar}`}
                    height={200}
                    width={150}
                  />
                </li>
              );
            })}
          </div>
          <div>
            <img
              src={carItem.imageCar}
              alt={carItem.nameCar}
              height={200}
              width={150}
            />
          </div>
        </Flex>
      </div>
      <div
        style={{
          display: isOpen ? 'block' : 'none',
          color: 'red',
          border: '1px solid black',
        }}
      >
        <li key={carModalItem.id} onClick={() => setIsOpen(!isOpen)}>
          <h2>{carModalItem.nameCar}</h2>
          <span>{carModalItem.price}</span>
          <img
            src={carModalItem.imageCar}
            alt={`${carModalItem.nameCar}`}
            height={200}
            width={150}
          />
        </li>
        <Button onClick={() => setCarItem(carModalItem)}>Change Car</Button>
      </div>
    </>
  );
};

export default WarningComponent;

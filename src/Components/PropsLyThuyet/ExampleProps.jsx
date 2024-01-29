import React, { useState } from 'react';
import carBenz from '../Image/car-benz.jpeg';
import carBMW from '../Image/car-bmw.jpeg';
import carLexus from '../Image/car-lexus.jpeg';
import CarItemComponent from './CarItemComponent';
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Square,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

// Global Variable
const infoDefault = {
  id: 1,
  nameCar: 'Xe Benz',
  imageCar: carBenz,
  price: '1000',
};

const ExampleProps = () => {
  const [carInfo, setCarInfo] = useState(infoDefault);

  const [carFinal, setCarFinal] = useState(infoDefault);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const listCar = [
    {
      id: 1,
      nameCar: 'Xe Benz',
      imageCar: carBenz,
      price: '1000',
    },
    {
      id: 2,
      nameCar: 'Xe BMW',
      imageCar: carBMW,
      price: '3000',
    },
    {
      id: 3,
      nameCar: 'Xe Lexus',
      imageCar: carLexus,
      price: '1500',
    },
  ];

  const handleSetCarInfo = (car) => {
    const newCarInfo = {
      id: car.id,
      nameCar: car.nameCar,
      imageCar: car.imageCar,
      price: car.price,
    };
    setCarInfo(newCarInfo);
  };

  /**
   * 2 div
   *
   * div1: hinhAnh, name
   * div2: list dsXe, name
   *
   */

  return (
    <Flex p={5} gap={2}>
      <Box
        h={150}
        border={'1px solid black'}
        p='6'
        rounded='md'
        bg='white'
        _hover={{ background: 'red', borderColor: 'green.500', border: '2px' }}
        _groupHover={{ color: 'tomato' }}
      >
        <Image display={'block'} src={carBenz} alt={`${carBenz}`} w={100} />
        <Text fontSize={'20px'} textAlign={'center'}>
          Xe Benz
        </Text>
      </Box>
      <Flex border={'1px solid black'} p='6' rounded='md'>
        {listCar.map((item) => {
          return (
            <Flex
              m={'0 5px'}
              border={'1px solid black'}
              rounded='sm'
              bg='white'
              _hover={{
                borderColor: 'green.500',
                borderRadius: '8px',
              }}
              w={90}
              p={1}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              key={item.id}
            >
              <Image
                display={'block'}
                src={item.imageCar}
                alt={`${item.nameCar}`}
                w={50}
                h={50}
              />
              <Text textAlign={'center'}>{item.nameCar}</Text>
              <Button
                colorScheme='teal'
                variant='outline'
                size={'xs'}
                onClick={() => {
                  // sự kiện thứ 1
                  handleSetCarInfo(item);

                  // sự kiện thứ 2
                  onOpen();
                }}
              >
                Click
              </Button>
            </Flex>
          );
        })}
      </Flex>
      <Box>
        <Text>My Wallet: $2000</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Car Infomation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              display={'block'}
              src={carInfo.imageCar}
              alt={`${carInfo.nameCar}`}
              w={30}
              h={30}
            />
            <Text textAlign={'center'}>{carInfo.nameCar}</Text>
            <Flex>
              <Text fontSize={12} as='del'>
                {`$${carInfo.price * 2}`}
              </Text>
              <Text fontSize={12} color={'red'} ml={1}>
                {`$${carInfo.price}`}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant='ghost'
              onClick={() => {
                /**
                 * Bài tập 1:
                 * 1. Lấy đc cái dữ liệu khi click và set lại state carFinal
                 * 2. notifition : thư viện toast thông báo đã mua thành công
                 * 3. đóng modal
                 */
              }}
            >
              Buy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ExampleProps;

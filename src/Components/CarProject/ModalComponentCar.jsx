import React from 'react';
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ModalComponentCar = (props) => {
  const { isOpen, onClose, listCar, onOpen, setListCar } = props;

  const handleChangeCount = (isPlus, carItem) => {
    if (isPlus) {
      const newListCar = listCar.map((item) => {
        if (item.id === carItem.id) {
          const newUpdateCarItem = { ...item, count: item.count + 1 };
          return newUpdateCarItem;
        }
        return item;
      });
      setListCar(newListCar);
    } else {
      const newListCar = listCar.map((item) => {
        if (item.id === carItem.id) {
          if (item.count < 0) {
            const newUpdateCarItem = { ...item, count: 0 };
            return newUpdateCarItem;
          } else {
            const newUpdateCarItem = { ...item, count: item.count - 1 };
            return newUpdateCarItem;
          }
        }
        return item;
      });
      setListCar(newListCar);
    }
  };

  const sumTotal = listCar.reduce(
    (total, item) => (total += item.price * item.count),
    0
  );

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sản phẩm trong giỏ hàng</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {listCar
              .filter((i) => i.count)
              .map((item, index) => {
                return (
                  <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    key={item.id}
                  >
                    <Image src={item.imageCar} alt='xe benz' w={40} />
                    <Text fontSize='2xl'>{item.nameCar}</Text>
                    <Flex alignItems={'center'} gap={5}>
                      <Button onClick={() => handleChangeCount(false, item)}>
                        -
                      </Button>
                      <Text>{item.count}</Text>
                      <Button onClick={() => handleChangeCount(true, item)}>
                        +
                      </Button>
                    </Flex>
                    <Text fontSize='xl'>${item.price * item.count}</Text>
                    <Icon as={DeleteIcon} cursor={'pointer'} />
                  </Flex>
                );
              })}
            <Text textAlign={'right'}>Total: ${sumTotal}</Text>
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent={'space-between'} w={'100%'}>
              <Text>3 san pham da them vao gio hang</Text>
              <Box>
                <Button colorScheme='blue' mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponentCar;

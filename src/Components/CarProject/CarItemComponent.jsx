import React from 'react';
import { CheckCircleIcon, AddIcon, DragHandleIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';

const CarItemComponent = (props) => {
  const { item, listCar, setListCar } = props;
  const toast = useToast();

  const showToast = (title, status) => {
    toast({
      title: title,
      status: status,
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    });
  };

  //C2
  const handleChangeLike = (listCar, itemCar) => {
    const newListCar = [...listCar];
    const index = newListCar.findIndex((car) => car.id === itemCar.id);
    if (index !== -1 && !newListCar[index].isLike) {
      newListCar[index] = {
        ...newListCar[index],
        isLike: true,
      };
      showToast('Sản phẩm đã được yêu thích', 'success');
    } else {
      showToast('Sản phẩm đã có trong mục yêu thích', 'warning');
    }
    setListCar(newListCar);
  };

  const handleAddToCart = (listCar, itemCar) => {
    // c2
    // const newListCar = [...listCar];
    // const index = newListCar.findIndex((car) => car.id === itemCar.id);
    // if (index !== -1 && !newListCar[index].isBuy) {
    //   newListCar[index] = {
    //     ...newListCar[index],
    //     isBuy: true,
    //   };
    //   showToast('Sản phẩm đã được thêm vào giỏ hàng', 'success');
    // } else {
    //   showToast('Sản phẩm đã có trong giỏ hàng', 'warning');
    // }
    // setListCar(newListCar);

    // c1
    const newListCar = listCar.map((oldCar) => {
      if (oldCar.id === itemCar.id && !oldCar.isBuy) {
        let newUpdateOldCar = { ...oldCar, isBuy: true, count: 1 };
        showToast('Sản phẩm đã được thêm vào giỏ hàng', 'success');
        return newUpdateOldCar;
      } else if (oldCar.id === itemCar.id && oldCar.isBuy) {
        showToast('Sản phẩm đã có trong giỏ hàng', 'warning');
      }
      //index 2,3
      return oldCar;
    });
    setListCar(newListCar);
  };

  return (
    <>
      <Card maxW='md' key={item.id}>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Box>
                <Heading size='sm'>{item.nameCar}</Heading>
                <Text>${item.price}</Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              icon={<DragHandleIcon />}
            />
          </Flex>
        </CardHeader>
        <Image
          objectFit='cover'
          src={item.imageCar}
          alt={`${item.imageCar}`}
          h={250}
        />

        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '50px',
            },
          }}
        >
          <Button
            flex='1'
            variant='ghost'
            leftIcon={<CheckCircleIcon color={item.isLike ? 'green' : ''} />}
            onClick={() => handleChangeLike(listCar, item)}
          >
            Like
          </Button>
          <Button
            flex='1'
            variant='ghost'
            onClick={() => handleAddToCart(listCar, item)}
            leftIcon={<AddIcon />}
          ></Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CarItemComponent;

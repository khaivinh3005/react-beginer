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
import HeaderCarComponent from './HeaderCarComponent';

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
    if (index !== -1) {
      newListCar[index] = {
        ...newListCar[index],
        isLike: !newListCar[index].isLike,
      };

      showToast('Sản phẩm đã được yêu thích', 'success');
    }
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
          <Button flex='1' variant='ghost' leftIcon={<AddIcon />}></Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CarItemComponent;

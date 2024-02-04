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
} from '@chakra-ui/react';

const CarItemComponent = (props) => {
  const { item, listCar, setListCar } = props;

  const handleChangeLike = (listCar, itemCar) => {
    console.log('listCar: ', listCar);
    console.log('itemCar : ', itemCar);
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
              minW: '136px',
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
          <Button flex='1' variant='ghost' leftIcon={<AddIcon />}>
            Comment
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CarItemComponent;

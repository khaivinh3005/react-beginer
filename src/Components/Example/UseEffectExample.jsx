import {
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';

/**
 *
 * 1.Khi vào trang mặc định sẽ vô tab sofa
 *
 */

const UseEffectExample = () => {
  //constructor 1
  const [tab, setTab] = useState(1);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    if (tab === 2) {
      // cal API ghế
      console.log('call API ghế');

      const dataChairs = [
        {
          id: 1,
          name: 'Ghế gỗ',
        },
        {
          id: 2,
          name: 'Ghế sắt',
        },
        {
          id: 3,
          name: 'Ghế đẩu',
        },
      ];

      setListData(dataChairs);
    } else {
      console.log('call API sofa useEffec 2');

      const dataSofa = [
        {
          id: 1,
          name: 'sofa dài',
        },
        {
          id: 2,
          name: 'sofa lười',
        },
        {
          id: 3,
          name: 'sofa luxury',
        },
      ];

      setListData(dataSofa);
    }
  }, [tab]); //tab có sự thay đổi thì ms chạy

  //giá trị tab ban đầu là gì  => ko biết => mặc định tab có sự thay đổi

  //2
  return (
    <>
      <Flex gap={2}>
        <Button
          style={{
            background: tab === 1 && 'black',
            color: tab === 1 && 'white',
          }}
          onClick={() => setTab(1)}
        >
          Sofa
        </Button>
        <Button
          style={{
            background: tab === 2 && 'black',
            color: tab === 2 && 'white',
          }}
          onClick={() => setTab(2)}
        >
          Ghế
        </Button>
      </Flex>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {listData.map((item, index) => {
          return (
            <Card maxW='100%' key={index}>
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{item.name}</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export default UseEffectExample;

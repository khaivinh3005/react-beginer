/**
 * ES5: class component
 * 2016: React => class component (Ưu tiên dùng)
 * để mà setState => this.setState
 *
 *
 * Function component
 * useState => chưa ra đời vào 2016
 *
 *
 *
 * 2019 => hook ra đời phục vụ cho setState ở function => useState
 *Hook: useState, useEffect
 *
 *
 *
 *
 * Dữ liệu cần thay đổi trên giao diện => state
 */

import {
  Box,
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
import React, { useEffect, useState } from 'react';
import { URLCats, URLDogs, URLImageDogs } from '../API/ConstantAPI';
import axios from 'axios';

const FunctionComponent = () => {
  const [listAnimal, setListAnimal] = useState([]);
  const [tab, setTab] = useState(null);
  //       Tham số thứ 1, tham số 2
  //       Tham số thứ 2: dependency
  useEffect(() => {
    axios({
      method: 'get',
      url: URLDogs,
      responseType: 'stream',
    })
      .then(async (response) => {
        // call API dog
        const dataAPI = JSON.parse(response.data);
        const newListDog = dataAPI.data.map((item) => {
          const newObjectDog = {
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
          };
          return newObjectDog;
        });
        setListAnimal(newListDog);
        // await Promise.all(
        //   newListDog.map(async (dog) => {
        //     const imageDog = await axios({
        //       method: 'get',
        //       url: URLImageDogs,
        //       responseType: 'stream',
        //     });

        //     const imageData = await JSON.parse(imageDog.data);
        //     const imageUrl = imageData.message;

        //     setListAnimal((prevListDog) => {
        //       const updateNewDog = prevListDog.map((item) =>
        //         item.id === dog.id ? { ...item, image: imageUrl } : item
        //       );
        //       return updateNewDog;
        //     });
        //   })
        // );
      })
      .catch((error) => console.log('error : ', error));
  }, []);
  //call 1 lần duy nhất khi mới load trang, sau đó khi thay setState thì nó ko vô hàm useEffect ni nữa vì dependency là []

  // api: cats
  useEffect(() => {
    if (tab) {
      axios({
        method: 'get',
        url: URLCats,
        responseType: 'stream',
      })
        .then((response) => {
          const newListCats = JSON.parse(response.data);
          const newListUpdateCats = newListCats.map((item) => {
            const newObjectCat = {
              name: item.name,
              description: item.description,
              image: item.cfa_url,
            };

            return newObjectCat;
          });
          setListAnimal(newListUpdateCats);
        })
        .catch((error) => console.log('error  : ', error));
    } else {
      console.log('dogs');
    }
  }, [tab]);

  return (
    <div>
      <header>
        <Button>Trang Chủ</Button>
        <Button onClick={() => setTab('cat')}>Danh Sách Mèo</Button>
        <Button>Danh Sách Chó</Button>
      </header>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {listAnimal.map((item, index) => {
          return (
            <Card maxW='100%' key={item.id}>
              <CardBody>
                <Image
                  src={
                    item.image ||
                    'https://images.dog.ceo/breeds/keeshond/n02112350_4117.jpg'
                  }
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{item.name}</Heading>
                  <Text>{item.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default FunctionComponent;

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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URLCoze } from '../API/ConstantAPI';

const CozeListComponent = (props) => {
  const { setTab, listData } = props;
  return (
    <>
      <Flex>
        <Button onClick={() => setTab(1)}>ALL</Button>
        <Button onClick={() => setTab(2)}>Photo & Photography</Button>
        <Button onClick={() => setTab(3)}>Web Search</Button>
      </Flex>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {listData.map((item) => {
          return (
            <Card maxW='sm' key={item.id}>
              <CardBody>
                <Image
                  src={item.logo}
                  alt={item.name}
                  borderRadius='lg'
                  className='cozeItem'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{item.name}</Heading>
                  <span>{item.subtitle}</span>
                  <Text>{item.description}</Text>

                  <Text color='gray.600' fontSize='xs'>
                    {item.category}
                  </Text>
                  <Flex gap={10}>
                    <span>{item.star}K</span>
                    <span>{item.user}</span>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export default CozeListComponent;

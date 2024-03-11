import React, { useState } from 'react';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
/**
 * React hook form là gì ? tại sao dùng ?
 *
 *
 * register => useState
 */

const ExampleReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log('errors : ', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex p={5} flexDirection={'column'}>
        <Text fontSize='xl'>Tài Khoản</Text>
        <Input
          placeholder='Vui lòng nhập tài khoản'
          {...register('userName', { required: true, maxLength: 10 })}
        />
        {errors.userName && (
          <Text color={'red'}>Username phải dưới 10 kí tự</Text>
        )}
        {/* password */}
        <Text fontSize='xl'>Mật Khẩu</Text>
        <Input
          placeholder='Vui lòng nhập mật khẩu'
          type='password'
          {...register('password', { required: true })}
        />
        {errors.password && (
          <Text color={'red'}>Password Không được để trống </Text>
        )}
        {/* confirm password */}
        <Text fontSize='xl'>Xác nhận mật khẩu</Text>
        <Input
          placeholder='Vui lòng nhập mật khẩu'
          type='password'
          {...register('confirmPassword', {
            required: true,
            validate: (value) => {
              /**
               * 1. value password
               * 2. value confirm password
               */
              console.log('taikhoan : ', watch('userName'));
              console.log('password : ', watch('password'));
              console.log('confirm pw : ', value);
              const valuePassword = watch('password');

              if (valuePassword !== value) {
                return 'Password khong trung khop';
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <Text color={'red'}>{errors.confirmPassword.message}</Text>
        )}

        <Button w={30} mt={2} type='submit'>
          Đăng Nhập
        </Button>
      </Flex>
    </form>
  );
};

export default ExampleReactHookForm;

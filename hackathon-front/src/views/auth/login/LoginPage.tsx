import React, { FC, useState } from 'react';
import {
  Flex,
  Box,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  chakra,
} from '@chakra-ui/react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Path } from '../../../core/router/paths';
import { LoginFormInitialValues } from '../types';
import { Form, Formik, FormikHelpers } from 'formik';
import { TextInput } from '../../../components/input/TextInput';
import { useBackgroundColor } from '../utils';
import authStore from '../../../store/auth';
// import { loginUserApi } from '../../../api/auth/api';
import { errorToast } from '../../../components/alerts/fail';
import { observer } from 'mobx-react-lite';
import '../../../components/bg/index.css';
import {BackgroundImages} from "../../../components/bg/BgImages";
import {ProjectDescription} from "../../../components/projectDescription";
import * as authApi from "../../../api/auth";

const wikiSynagogueUrl = 'https://en.wikipedia.org/wiki/Synagogue';

// TODO: use yup object for validate input because stars is not a good choice in Login Page

export const LoginPage: FC = observer(() => {
  const bg1 = '#050407';
  const history = useHistory();

  const login = async (values: LoginFormInitialValues, helpers:  FormikHelpers<LoginFormInitialValues>) => {
    if(values.login && values.password) {
        return authApi.loginUserApi(values).then(res => {
            helpers.resetForm();
            if(res?.status === 200) {
                authStore.setUser(res.data);
                authStore.setTokenToLocalStorage(res.data);
                history.push('/main')
            } else {
                errorToast('Не правильные данные пользователя, попробуйте еще раз!');
            }
        })
    } else {
        errorToast('Пожалуйста заполните все данные!')
    }
  }

  // const signIn = (values: LoginFormInitialValues, helpers:  FormikHelpers<LoginFormInitialValues>) => {
  //   if(values.login && values.password) {
  //     loginUserApi(values).then((res) => {
  //       helpers.resetForm();
  //       if(res?.status === 200) {
  //         authStore.setUser(res.data.member);
  //         authStore.setTokenToLocalStorage(res.data.userToken, res.data.member);
  //         history.push('/main')
  //       } else {
  //         errorToast('Wrong user data, please try again!');
  //       }
  //     });
  //   } else {
  //     errorToast('Please, enter all needed fields!');
  //   }
  // }

  return (
    <Formik<LoginFormInitialValues>
      enableReinitialize
      initialValues={{
        login: '',
        password: '',
      }}
      onSubmit={async (values, formikHelpers) => {
        await login(values, formikHelpers);
      }}
    >
      {({ isSubmitting, dirty, isValid, values }) => (
          <Flex
              bg={bg1}
              w="100%"
              h={'100vh'}
              align={'center'}
              justify={'center'}
              userSelect={'none'}
          >
            <Flex w="40%" h="85%" color="#fff" justifyContent="center" pl="63px" pr="63px" alignItems="flex-start" flexDir="column" marginTop="100px">
              <Stack mx={'auto'} maxW={'lg'} w="450px">

                <Text w={'229px'} h="38px" fontSize={'32px'} lineHeight="38px" fontWeight="400">Вход в систему</Text>
                <Form id="login-page-form" style={{ marginTop: '26px' }}>
                  <Box
                      rounded={'lg'}
                      boxShadow={'lg'}
                      width="315px"
                  >
                    <Stack spacing={4}>
                      <TextInput
                          width="315px"
                          autoComplete="on"
                          name='login'
                          label='E-mail'
                      />
                      <TextInput
                          width="315px"
                          autoComplete="on"
                          name='password'
                          label='Пароль'
                          type='password'
                      />
                      <Stack spacing={4}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                          <Link color={'blue.400'}>Восстановить пароль</Link>
                        </Stack>
                        <Button
                            type="submit"
                            form="login-page-form"
                            loadingText="Submitting"
                            size="lg"
                            bg={'#3047FE'}
                            color={'white'}
                            _hover={{
                              bg: 'blue.500',
                            }}
                        >
                          Войти
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Form>
              </Stack>
              <Flex alignItems="flex-end">
                <Text align={'center'} marginTop="130px">
                  Нет аккаунта? <RouterLink to={Path.REGISTER}>
                  <chakra.span color='#4299E1' _hover={{ textDecoration: 'underline' }}>
                    Регистрация
                  </chakra.span>
                </RouterLink>
                </Text>
              </Flex>
            </Flex>
            <Flex h="100%" fontWeight="400" position="relative" w="60%">
              <BackgroundImages />
              <Flex w="100%" h="100%" position="relative">
                  <ProjectDescription desc={'Здесь будет описание проекта и идеи'} linkText={'Узнать больше'}/>
              </Flex>
            </Flex>
          </Flex>
      )}
    </Formik>
  )}
)


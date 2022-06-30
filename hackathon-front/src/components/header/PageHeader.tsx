import React, {useEffect} from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure, Icon,
  chakra, MenuList, MenuItem, Menu, MenuButton,
    Divider
} from '@chakra-ui/react';
import profileStore from '../../store/profile';
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavigationLink } from '../navigationLink/NavigationLink';
import { Path } from '../../core/router/paths';
import { observer } from 'mobx-react-lite';
import authStore from '../../store/auth';
import { FaUserAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {NotificationIcon} from "../../assets/svg/NotificationIcon";
import {ProfileIcon} from "../../assets/svg/ProfileIcon";
import { AiOutlineExport } from "react-icons/ai";

export const PageHeader = observer(() => {
  const { isAuthorized } = authStore;
  const name = localStorage.getItem('name')
  const role = localStorage.getItem('role')
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const logOut = () => {
    authStore.deleteTokenFromLocalStorage();
    history.push('/login');
  }

  // useEffect(() => {
  //   if(localStorage.getItem('auth_token') || localStorage.getItem('session'))
  // })

  // useEffect(() => {
  //   !isAuthorized && history.push('/login')
  // }, [isAuthorized])

  console.log(isAuthorized, 'HEADER')

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      h="64px"
      bg="#050407"
      color="#FFFFFF"
    >

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        fontSize="16px"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <NavigationLink ml="49px" to={Path.MAIN} text="Главная" activeStyle={{ borderBottom: '1px solid #fff'}}/>
        <NavigationLink ml="42px" to={Path.SESSIONS} text="Котировочные сессии" activeStyle={{ borderBottom: '1px solid #fff'}}/>
        <NavigationLink  ml="42px" to={Path.SUPPORT} text="Поддержка" activeStyle={{ borderBottom: '1px solid #fff'}}/>
      </Stack>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
          d={'flex'}
          flexDir="row"
        >
          {!isAuthorized ? (
          <><Button
              h="27px"
              borderRadius="4px"
              w="68px"
              mr="17px"
              bg={'#050407'}
              border='1px'
              borderColor='#3047FE'
              _hover={{
                bg: '#3047FE',
                border: 'none',
              }}
              onClick={() => history.push('/login')}
          >
            <Text fontSize="14px">Войти</Text>
          </Button><Button
              h="27px"
              mr="18px"
              borderRadius="4px"
              bg={'#3047FE'}
              _focus={{bg: "white.700"}}
              _active={{bg: "blue"}}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={() => history.push('/register')}
          >
            <Text fontSize="14px">Зарегистрироваться</Text>
          </Button></>
          ) : (
              <Flex w="100px" h="100%" justifyContent="space-evenly" alignItems="center">
                <Box h="22px" cursor="pointer" mt="2px">
                  <NotificationIcon />
                </Box>
                <Menu styleConfig={{width: '161px', height: '202px'}}>
                  <MenuButton as={Flex} h="44px" alignItems="center" cursor="pointer">
                    <Flex
                        h="22px" d="flex" alignItems="center" cursor="pointer"
                    >
                      <ProfileIcon />
                    </Flex>
                  </MenuButton>
                  <MenuList bgColor={'#000000'} border={'1px solid #1d2634'} w="151px" h="210px" mt="10px" ml="20px" p="12px 12px 13px 12px" borderRadius="8px">
                    <MenuItem
                        onClick={() => {
                          history.push('/profile');
                        }}
                        color={'#fff'}
                        w="135px"
                    >
                      <Text fontSize="16px" lineHeight="20px" _hover={{ borderBottom: "1px solid #fff" }}>
                        Настройки
                      </Text>
                    </MenuItem>
                    <MenuItem
                        // onClick={() => {
                        //   dispatch(authManagerActions.logOut());
                        // }}
                        color={'#fff'}
                        w="135px"
                        mt="11px"
                        onClick={() => {
                          history.push('/profile')
                          profileStore.setAutoBetsActive();
                        }}
                    >
                      <Text fontSize="16px" lineHeight="20px" _hover={{ borderBottom: "1px solid #fff" }}>
                        Ваши ставки
                      </Text>
                    </MenuItem>
                    <MenuItem
                        // onClick={() => {
                        //   dispatch(authManagerActions.logOut());
                        // }}
                        color={'#fff'}
                        w="135px"
                        mt="11px"
                    >
                      <Text fontSize="16px" lineHeight="20px" _hover={{ borderBottom: "1px solid #fff" }}>
                        Автоматические ставки
                      </Text>
                    </MenuItem>
                    <MenuItem
                        // onClick={() => {
                        //   dispatch(authManagerActions.logOut());
                        // }}
                        color={'#fff'}
                       w="135px"
                        mt="11px"
                    >
                      <Text fontSize="16px" lineHeight="20px" _hover={{ borderBottom: "1px solid #fff" }}>
                        Уведомления
                      </Text>
                    </MenuItem>
                    <Divider orientation='horizontal' mt="11px"/>
                    <MenuItem
                        onClick={() => {
                          logOut()
                        }}
                        color={'#fff'}
                        w="115px"
                        ml="20px"
                        mt="11px"
                        _focus={{ backgroundColor: 'inherit' }}
                        _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.24)' }}
                    >
                      <Text fontSize="14px" lineHeight="20px" border="1px solid #3047FE" borderRadius="4px" d="flex" alignItems="center" justifyContent="center" w="92px" h="27px"
                            _hover={{
                              bg: 'blue.500',
                            }}
                      >
                        Выйти
                      </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Box>

                </Box>
              </Flex>
          )}
        </Box>
    </Flex>
)});
import React, {useEffect} from 'react';
import {Form, Formik} from "formik";
import {ProfileInfoValues} from "../../auth/types";
import {TextInput} from "../../../components/input/TextInput";
import {Box, Button, chakra, Flex, Text} from "@chakra-ui/react";
import profileStore from '../../../store/profile';
import {observable, values} from "mobx";
import {observer} from "mobx-react-lite";
import {successToast} from "../../../components/alerts/success";
import {errorToast} from "../../../components/alerts/fail";
import {convertMinutesToData} from "../../../utils/convertDate";

export const SettingProfile = observer(() => {
    const { profileInfo, responseStatus } = profileStore;
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        profileStore.getProfileInfo(token).then(res => res);
    }, []);

    const saveData = async (values: ProfileInfoValues) => {
        await profileStore.saveUserProfileInfo(token, {...values, notificationDelay: convertMinutesToData(values.notificationDelay)})
    }

    useEffect(() => {
        if (responseStatus.message) {
            if (responseStatus.code === 200) {
                successToast(responseStatus.message);
            } else {
                errorToast(responseStatus.message);
            }
        }
    }, [responseStatus]);

    return (
        <Flex h="100%" w="680px" p="43px 42px 0 0" flexDir="column">
            <Formik<ProfileInfoValues>
                enableReinitialize
                initialValues={
                    profileInfo ? profileInfo : {
                        email: '',
                        companyName: '',
                        accessKey: '',
                        notificationDelay: '',
                    }
                }
                onSubmit={ async (values, formikHelpers) => {
                    await saveData(values);
                }}
            >
                {({ isSubmitting, dirty, isValid, values }) => (
                <>
                    <Form id="setting-profile-form" style={{paddingLeft: '41px'}}>
                        <TextInput
                            autoComplete="on"
                            name='email'
                            label='E-mail для авторизации'
                            w="315px"
                            h="43px"/>
                        <Box mt="15px">
                            <TextInput
                                autoComplete="on"
                                name='companyName'
                                label='Название компании'
                                w="315px"
                                h="43px"/>
                        </Box>
                        <Box mt="15px">
                            <TextInput
                                autoComplete="on"
                                name='accessKey'
                                label='Ключ авторизации'
                                w="315px"
                                h="43px"/>
                        </Box>
                        <Flex mt="50px" h="26px" w="100%" flexDir="column">
                            <Flex position="relative" border="1px solid #FFFFFF" borderRadius="5px" h="30px"
                                  w="120px" alignItems="center">
                                <TextInput
                                    autoComplete="on"
                                    name='notificationDelay'
                                    w="60px"
                                    border='none'
                                    _focus={{boxShadow: 'none'}}
                                    // type="number"
                                    // min="1"
                                    // max="120"
                                    h="32px"
                                    alignItems="center"
                                    d="flex"/>
                                <Text position="absolute"
                                      left='67px'>
                                    минут
                                </Text>
                            </Flex>
                            <Box mt='5px' color='yellow'>
                                !!!
                                <chakra.span fontSize="14px" lineHeight="17px" fontWeight="400" color='#485aed'
                                             ml='10px'>
                                    За сколько предупредить вас об окончании сессии
                                </chakra.span>
                            </Box>
                        </Flex>
                    </Form>
                        <Button
                            type="submit"
                            form="setting-profile-form"
                            h="37px"
                            w='222px'
                            borderRadius="4px"
                            bg={'#3047FE'}
                            _focus={{bg: "white.700"}}
                            _active={{bg: "blue"}}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            mt="55px"
                            ml="42px"
                        >
                            <Text fontSize="14px">Поставить ставку</Text>
                        </Button>
                </>
                )}
            </Formik>
        </Flex>
    )
})
import {
    Button,
    Divider,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Text, Flex, Box, Input, Textarea, useDisclosure,
} from '@chakra-ui/react';
import React, {FC, useState} from 'react';
import { IconType } from 'react-icons/lib';
import { getChakraPortalProps } from '../core/chakra/chakraProvider';
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import {startBotData} from "../api/session";
import {successToast} from "../components/alerts/success";
import {errorToast} from "../components/alerts/fail";

interface ModalManualProps {
    id: any;
}

export const ModalBot: FC<ModalManualProps> = ({id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const token = localStorage.getItem('authToken')
    const [ inputValue, setInputValue ] = useState('');

    function send() {
        startBotData(token, id, {minPay: +inputValue, id: null, priority: 0, timeDelay: '00:20:00'}).then(res => {
            console.log(res);
            if (res.status === 200) {
                    successToast('Ура, Бот запустился!!!');
                } else {
                    errorToast(res.message);
                }
            setInputValue('');
            onClose();
        })
    }

    return (
        <Box>
            <Button
                onClick={onOpen}
                h="44px"
                w='222px'
                mr='27px'
                mt='13px'
                borderRadius="4px"
                border='1px'
                borderColor='#3047FE'
                bg={'#050407'}
                _focus={{ bg: "white.700" }}
                _active={{ bg: "blue" }}
                _hover={{
                    bg: '#3047FE',
                    border: 'none',
                }}
            >
                <Text align='center' mr='11px' ml='20px' mt='5px' mb='5px' w='191px' h='34px' fontSize="14px">
                    Запустить в <br/> автоматическом режиме
                </Text>
            </Button>
            <Modal isOpen={isOpen} onClose={() => {
                onClose();
                setInputValue('');
            }}>
                <ModalOverlay opacity='0.1' />
                <ModalContent
                    mt='70px'
                    w='699px'
                    h='578px'
                    borderRadius="4px"
                    color={'#FFFFFF'}
                    bg={'#050407'}
                >
                    <ModalHeader mt='26px' pt='0px' pb='0px'>
                        <Text align='center' fontSize='24px'> Согласшение о проведении процедуры котировочной сессии в
                            автоматическом режиме
                        </Text>
                    </ModalHeader>
                    <ModalBody p='0px'>
                        <Flex justify="center" as="section" wrap="wrap">
                            <Flex>
                                <Box></Box>
                                <Text align='center' fontSize='14px'> Просим внимательно ознакомиться с условиями</Text>
                            </Flex>
                            <Box
                                ml='50px' mr='50px' mt='14px' w='419px' h='163px'
                                borderRadius="4px"
                                border='1px'
                                borderColor='#3047FE'
                            >
                                <Text w='300' mt='14px' ml='20px' mr='20px'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi
                                </Text>
                            </Box>
                            <Flex mt='2px' ml='50px' h='39px' mr='27'
                                 borderRadius="4px"
                                 borderColor='#3047FE'
                                 bg='#050407'
                            >
                                <Flex
                                    ml='50px' mr='50px'
                                >
                                    <Flex
                                        mt='10px'
                                        justify="center"
                                        border='1px'
                                        borderRadius="4px"
                                        borderColor={'#3047FE'}
                                    >
                                            <Input
                                                mr='10px'
                                                h='41px'
                                                w='120px'
                                                color={'#3047FE'}
                                                fontSize='24px'
                                                variant='unstyled'
                                                onChange={(e) => setInputValue(e.target.value)}
                                                value={inputValue}
                                            >
                                            </Input>
                                            <Box mt='5px' color='#3047FE' h='24px'>
                                                <CurrencyRubleIcon/>
                                            </Box>
                                    </Flex>
                                    <Box>
                                        <Text align='center' fontSize='14px'> Введите минималную сумму, до которой <br/>
                                        вы будете вести торги</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </ModalBody>
                    <ModalFooter mb='15px' pt='0px'>
                        <Button
                            onClick={send}
                            h="37px"
                            w='222px'
                            mr='27px'
                            mt='24px'
                            borderRadius="4px"
                            bg={'#3047FE'}
                            _focus={{ bg: "white.700" }}
                            _active={{ bg: "blue" }}
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            <Text fontSize="14px">Принять условия</Text>
                        </Button>
                        <Button
                            onClick={() => {
                                onClose();
                                setInputValue('');
                            }}
                            h="37px"
                            w='222px'
                            mr='27px'
                            mt='24px'
                            border='1px'
                            borderRadius="4px"
                            borderColor={'#3047FE'}
                            bg={'#050407'}
                            _focus={{ bg: "white.700" }}
                            _active={{ bg: "blue" }}
                            _hover={{
                                bg: '#3047FE',
                            }}
                        >
                            <Text fontSize="14px">Отклонить</Text>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

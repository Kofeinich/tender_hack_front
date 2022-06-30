import React, {FC} from 'react';
import { Box, Text, Button, Flex, Grid } from "@chakra-ui/react";
import {botSession, sessionsType} from "../../types";
import sessionStore from "../../store/session";
import {useHistory} from "react-router-dom";
import CellTowerIcon from '@mui/icons-material/CellTower';
import FmdGoodIcon from '@mui/icons-material/FmdGood';


interface Props {
    id: number;
    sessionName: string;
    customerName: string;
    currentPrice: number;
    start: string;
    end: string;
    bet: number;
    location: string;
    lastCustomerBet: string;
    status: string;
    item: any;
    setSelected: any;
}

export const SessionDescription : FC<Props> = ({ item, id, status, sessionName, customerName, location, start, end, bet }) => {
    const history = useHistory();

    return (
        <Flex
            justify="space-between"
            w='784px'
            h='142px'
            bg={'#050407'}
            color={"#FFFFFF"}
            border='3px'
            borderColor='grey'
            mt='32px'
            mb='15px'
            borderRadius="6px"
            cursor="pointer"
            onClick={() => {
                sessionStore.getSessionId(id).then(res => res)
                history.push('/sessions/' + id)
            }}
        >
            <Box w='392px' ml='23px'>
                <Text mt='20px' fontSize='20px'>{sessionName}</Text>
                <Text
                    mb='5px' color='gray.500' fontSize='14px' mt='2px'
                    _hover={{
                        color: '#3047FE',
                    }}
                >
                    {customerName}
                </Text>
                <Flex
                    justify="center"
                >
                    <Box>

                    </Box>
                    <Text w='392px' h='17px' fontSize='14px'>`${start}` по `${end}`</Text>
                </Flex>
            </Box>
            <Box mr='14px'>
                <Flex
                    justify="center"
                >
                    <Text mt='26px' mr='15px' fontSize='14px'>Котировочная сессия {id}</Text>
                    <Box
                        borderRadius="4px"
                        border='1px'
                        borderColor='#3047FE'
                        bg={'#050407'}
                        h='28px'
                        w='108px'
                        mt='26px'
                    >
                        <Flex
                            justify="center"
                        >
                            <Box color='#3047FE'>
                                <CellTowerIcon fontSize='small'/>
                            </Box>
                            <Text mt='3px' ml='8px' w='65px' h='17px' fontSize='14px'>{status}</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Flex
                    justify='right'
                    mt='46px'
                >
                    <Box mb='5px' color='#3047FE'>
                        <FmdGoodIcon fontSize='small'/>
                    </Box>
                    <Text mb='10px' align='center' w='148px' h='17px' fontSize='14px'>{location}</Text>
                </Flex>
            </Box>
        </Flex>
    );
}
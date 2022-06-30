import React, {FC} from 'react';
import { Box, Text, Button, Flex, Grid } from "@chakra-ui/react";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import {ModalManual} from "../../modals/ModalManual";
import {ModalBot} from "../../modals/ModalBot";

interface Props {
    bet: number,
    currentPrice: number,
    customerName: string,
    end: string,
    id: number,
    lastCustomerBet: string,
    location: string,
    sessionName: string,
    start: string,
    status: string
}

export const Session: FC<Props> = ({ start, end, location, lastCustomerBet, bet,sessionName, customerName, currentPrice, id }) => {
 return (
    <Flex
        as="section"
        justify="space-between"
        wrap="wrap"
        w='784px'
        h='489px'
        bg={'#050407'}
        color={"#FFFFFF"}
        position='absolute'
        mt='52px'
        borderRadius="6px"

    >
        <Box w='435px' h='46px' >
            <Text ml='50px' mt='42px' fontSize='24px'>{sessionName} </Text>
            <Text ml='50px' fontSize='14px' mt='3px'>Котировочная сессия {id}</Text>
            <Text ml='50px' mt='33px' w='64px' h='17px' fontSize='14px'>Заказчик</Text>
            <Text ml='50px' fontSize='20px'>{customerName}</Text>
            <Text ml='50px' mt='13px' fontSize='14px'>С {start.slice(0, 10)} по {end.slice(0    , 10)}</Text>
            <Text ml='50px' mt='3px' fontSize='14px'>{location}</Text>

        </Box>
        <Box>
            <Text mt='52px' mr='105px' fontSize='14px'>До окончания сессии</Text>
            <Box mt='8px' w='222px' h='82px' mr='27'
                 borderRadius="4px"
                 border='1px'
                 borderColor='#3047FE'
                 bg='#050407'
            >
                <Text ml='22px' align='center' w='178px' h='62px' fontFamily='Bebas Neue' fontSize='44px'>04:52:02</Text>
                <Grid templateColumns='1fr 1fr 1fr'
                      ml='22px'
                >
                    <Text ml='5px' align='center' fontSize='10px'>Часы</Text>
                    <Text ml='10px' fontSize='10px'>Минуты</Text>
                    <Text mr='32px' fontSize='10px'>Секунды</Text>
                </Grid>
            </Box>
            <Text mt='52px' mr='105px' fontSize='14px'>Текущая цена</Text>
            <Box mt='4px' w='222px' h='39px' mr='27'
                 borderRadius="4px"
                 border='1px'
                 borderColor='#3047FE'
                 bg='#050407'

            >
                <Flex justify="center" >
                    <Text fontSize='24px'
                          align='center'
                    >
                        {currentPrice}
                    </Text>
                    <Box mt='5px' color='#3047FE' h='24px'>
                        <CurrencyRubleIcon/>
                    </Box>
                </Flex>
            </Box>
            <Flex
                as="div"
                justify="space-between"
                wrap="wrap"
                w='349'
            >
                <Box mt='20px' mr='105px'>
                    <Flex>
                        <Text fontSize='14px'>{lastCustomerBet}</Text>
                        <Box color='#3047FE' fontSize='small'>
                            <CurrencyRubleIcon/>
                        </Box>
                    </Flex>
                </Box>
                <Box mt='20px' mr='27'>
                    <Flex>
                        <Text fontSize='14px'>{bet}</Text>
                        <Box color='#3047FE' fontSize='small'>
                            <CurrencyRubleIcon/>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Box>
                <ModalManual value={currentPrice}/>
            </Box>
            <Box>
                <ModalBot
                    id={id}
                />
            </Box>
        </Box>
    </Flex>
)}
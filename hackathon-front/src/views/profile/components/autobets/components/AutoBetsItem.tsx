import {Flex, Input, Text} from "@chakra-ui/react";
import React, {FC} from "react";
import {AllBets, PriorityBets} from "../AutoBets";
import { botSession} from "../../../../../types";

interface AutoBetsItemProps {
    botSettingDto: {
        id: number;
        minPay: number;
        priority: number;
        timeDelay: string;
    },
    bet: number;
    currentPrice: number;
    customerName: string;
    end: string;
    id: number;
    lastCustomerBet: string;
    location: string;
    sessionName: string;
    start: string;
    status: string;
    setUpState: any;
    setDownState: any;
    index: number;
}

export const AutoBetsItem: FC<AutoBetsItemProps> = ({ index, id, sessionName, currentPrice, customerName, botSettingDto, setUpState, setDownState }) => {
    console.log(botSettingDto.priority, 'prr')
    return (
        <Flex w="100%">
            <Flex w="100%" p="7px 0 0" alignItems="center">
                <Flex border="1px solid #FFFFFF" w="568px" h="101px" borderRadius="6px" cursor="pointer" mt="9px" ml={"10px"} justifyContent="center">
                    <Flex flexDir="column" alignItems="center" justifyContent="center" ml="5px">
                        <Text fontSize="16px" color="#3047FE" fontWeight="600" cursor="pointer" onClick={() => setUpState({id, index})}>
                            up
                        </Text>
                        <Text fontSize="16px" color="#3047FE" fontWeight="600" cursor="pointer">
                            down
                        </Text>
                    </Flex>
                    <Flex p="13px 0 9px 19px" h="100%" w="59%" flexDir="column">
                        <Text fontSize='16px'>{sessionName}</Text>
                        <Text fontSize='10px' mt='2px'>{customerName}</Text>
                        <Flex mt="20px">
                            <Flex mr="10px" fontSize="12px" w="80px" h="19px" border={'1px solid #3047FE'} justifyContent="center" alignItems="center" borderRadius="4px">
                                {botSettingDto.timeDelay}
                            </Flex>
                            <Flex mr="10px" fontSize="12px" w="80px" h="19px" border={'1px solid #FFFFFF'} justifyContent="center" alignItems="center" borderRadius="4px">
                                <Input w="100%" h="100%" border="none" _focus={{ boxShadow: 'none' }} type="number" />
                            </Flex>
                            <Text mr="10px" fontSize='10px' mt='2px'>Режим работы</Text>
                        </Flex>
                    </Flex>
                    <Flex p="5px 7px 9px 0" h="100%" w="30%" alignItems="end" flexDir="column">
                        <Flex flexDir="column" alignItems="end">
                            <Text fontSize='12px'>Текущая цена</Text>
                            <Flex fontSize="12px" w="103px" h="19px" border={'1px solid #3047FE'} justifyContent="center" alignItems="center" borderRadius="4px">
                                {currentPrice}
                            </Flex>
                        </Flex>
                        <Flex flexDir="column" alignItems="end" mt="14px">
                            <Text fontSize='12px'>До следующей ставки</Text>
                            <Flex fontSize="12px" w="103px" h="19px" border={'1px solid #3047FE'} justifyContent="center" alignItems="center" borderRadius="4px">
                                17 минут
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
import React from 'react';
import { Box, Text, Button } from "@chakra-ui/react";
import {PageHeader} from "../../components/header/PageHeader";
import {useHistory} from "react-router-dom";

export const MainPage = () => {
    const history = useHistory();
    return (
        <>
            <header style={{ zIndex: 6 }}>
                <PageHeader />
            </header>
            <Box>
                <Box
                    h={'calc(100vh - 64px)'}
                    bgImage="url('/assets/new_back.jpg')"
                    bgPosition="center"
                    backgroundRepeat="no-repeat"
                    color='#FFFFFF'
                >
                    <Box
                        position='absolute'
                        h='280px'
                        w='597px'
                        bg={'#050407'}
                        mt='291px'
                        ml="26px"
                        borderRadius="6px"
                    >
                        <Text fontSize="36px" ml="34px" mt="50px">ПОРТАЛ ПОСТАВЩИКОВ</Text>
                        <Text fontSize="20px" ml="50px" mr="72px">Быстро найдите подходящий заказ или разместите свой</Text>
                        <Button
                            ml='34px'
                            mt="34px"
                            h="41px"
                            w="315px"
                            borderRadius="4px"
                            bg={'#3047FE'}
                            _focus={{ bg: "white.700" }}
                            _active={{ bg: "blue" }}
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            <Text fontSize="16px" onClick={() => history.push('login')}>Приступить к работе</Text>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
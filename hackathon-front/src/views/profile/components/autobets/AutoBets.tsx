import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import {ProfileInfoValues} from "../../../auth/types";
import {TextInput} from "../../../../components/input/TextInput";
import {Box, Button, chakra, Flex, Input, Text} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import activeSessionsStore from '../../../../store/activeSessions';
import {observable} from "mobx";
import {AutoBetsItem} from "./components/AutoBetsItem";
import {startBotData} from "../../../../api/session";
import {getAutoSessions} from "../../../../api/urls";

export const PriorityBets = () => {
    return (
        <Flex h="100%" flexDir="column">
            <Text ml="50px" fontSize="18px" fontWeight="400">
                Приоритизация сессий
            </Text>
            {/*<Flex w="100%" p="7px 0 0" alignItems="center">*/}
            {/*    <Text fontSize="16px" color="#3047FE" fontWeight="600" ml="18px">*/}
            {/*        !!!*/}
            {/*    </Text>*/}
            {/*    <AutoBetsItem />*/}
            {/*    <Flex justifyContent="center" alignItems="center" w="24px" h="24px" ml="16px" backgroundColor="#3047FE" borderRadius="4px" cursor="pointer">*/}
            {/*        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.925872L1.1875 0.222168L3.30585 1.77094C3.48652 1.90303 3.59375 2.1163 3.59375 2.34357V2.39365C3.59375 2.58028 3.66618 2.75927 3.79511 2.89124L7.71875 6.90735L8.34691 6.69303C8.59395 6.60874 8.86631 6.67456 9.05045 6.86303L11.3576 9.22458C11.6261 9.49939 11.6261 9.94495 11.3576 10.2198L10.2674 11.3357C9.9989 11.6105 9.5636 11.6105 9.29511 11.3357L6.98795 8.97414C6.80381 8.78567 6.73952 8.50688 6.82186 8.25402L7.03125 7.61106L3.10761 3.59494C2.97868 3.46297 2.80381 3.38883 2.62148 3.38883H2.57255C2.35052 3.38883 2.14216 3.27908 2.01311 3.09415L0.5 0.925872ZM8.30557 7.71411C8.17132 7.5767 7.95368 7.5767 7.81943 7.71411C7.68519 7.85152 7.68519 8.0743 7.81943 8.21171L9.88193 10.3228C10.0162 10.4602 10.2338 10.4602 10.3681 10.3228C10.5023 10.1854 10.5023 9.96263 10.3681 9.82522L8.30557 7.71411Z" fill="white"/>*/}
            {/*            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4301 1.78646C11.4757 1.96086 11.5 2.14417 11.5 2.33328C11.5 3.49921 10.5766 4.44439 9.4375 4.44439C9.2518 4.44439 9.07183 4.41927 8.90065 4.37217L4.54085 8.77148C4.59561 8.96132 4.625 9.16231 4.625 9.37032C4.625 10.5363 3.70159 11.4814 2.5625 11.4814C1.42341 11.4814 0.5 10.5363 0.5 9.37032C0.5 8.20438 1.42341 7.2592 2.5625 7.2592C2.76572 7.2592 2.96208 7.28929 3.14755 7.34534L7.44557 2.8828C7.39954 2.70759 7.375 2.52337 7.375 2.33328C7.375 1.16734 8.29841 0.222168 9.4375 0.222168C9.62226 0.222168 9.80134 0.247034 9.97173 0.293675L8.49978 1.80032L8.75 3.03697L9.95818 3.2931L11.4301 1.78646ZM2.23865 8.1332L2.5625 7.9629L2.88635 8.1332L3.25 8.15145L3.44727 8.46468L3.75328 8.6666L3.77111 9.03882L3.9375 9.3703L3.77111 9.70178L3.75328 10.074L3.44727 10.2759L3.25 10.5892L2.88635 10.6074L2.5625 10.7777L2.23865 10.6074L1.875 10.5892L1.67773 10.2759L1.37171 10.074L1.35389 9.70178L1.1875 9.3703L1.35389 9.03882L1.37171 8.6666L1.67773 8.46468L1.875 8.15145L2.23865 8.1332Z" fill="white"/>*/}
            {/*        </svg>*/}
            {/*    </Flex>*/}
            {/*</Flex>*/}
            <AllBets />
        </Flex>
    )
}







export const AllBets = observer(() => {
    const token = localStorage.getItem('authToken')
    const { activeSessionsList, isLoading } = activeSessionsStore;
    const [ upState, setUpState ] = useState({id: 0, index: 0})
    const [ downState, setDownState ] = useState({id: 0, index: 0})

    const swapUp = (state: any) => {
       activeSessionsList.map((item: any, index: number) => {
            if(state.id === item.id) {
                if(item.botSettingDto.priority > 0 || activeSessionsList[index - 1].botSettingDto.priority > 0) {
                    let prev = activeSessionsList[index]
                    activeSessionsList[index] = activeSessionsList[index - 1];
                    activeSessionsList[index].botSettingDto.priority = activeSessionsList[index - 1].botSettingDto.priority
                    activeSessionsList[index].botSettingDto.timeDelay = activeSessionsList[index - 1].botSettingDto.timeDelay
                    activeSessionsList[index - 1] = prev
                    activeSessionsList[index - 1].botSettingDto.priority = prev.botSettingDto.priority
                    activeSessionsList[index - 1].botSettingDto.timeDelay = prev.botSettingDto.timeDelay
                    startBotData(token, activeSessionsList[index].id, {
                        id: activeSessionsList[index].botSettingDto.id,
                        minPay: activeSessionsList[index - 1].botSettingDto.minPay,
                        priority: activeSessionsList[index - 1].botSettingDto.priority,
                        timeDelay: activeSessionsList[index - 1].botSettingDto.timeDelay
                    })
                    startBotData(token, activeSessionsList[index - 1].id, {
                        id: activeSessionsList[index - 1].botSettingDto.id,
                        minPay: activeSessionsList[index].botSettingDto.minPay,
                        priority: activeSessionsList[index].botSettingDto.priority,
                        timeDelay: activeSessionsList[index].botSettingDto.timeDelay
                    })
                    activeSessionsStore.getActiveSessionsInfo();
                } else {
                    let prev = activeSessionsList[index]
                    activeSessionsList[index] = activeSessionsList[index - 1];
                    activeSessionsList[index - 1] = prev
                }
            }
        })
        console.log(activeSessionsList.map((item: any) => item.id));
    }

    const swapDown = (state: any) => {
        activeSessionsList.map((item: any, index: number) => {
            if(state.id === item.id) {
                let prev = activeSessionsList[index]
                activeSessionsList[index] = activeSessionsList[index + 1];
                activeSessionsList[index + 1] = prev
            }
        })
        // console.log(activeSessionsList.map((item: any) => item.id));
    }

    useEffect(() => {
        swapUp(upState)
    }, [upState])

    useEffect(() => {
        setTimeout(() => {
            activeSessionsStore.getActiveSessionsInfo();
        }, 50000)
    })

    // useEffect(() => {
    //     swapDown(downState)
    // }, [downState])

    return (
        <Flex h="100%" flexDir="column" overflowY="scroll" mt="13px" ml="30px">
            {
                activeSessionsList?.map((item: any, index: number) => <AutoBetsItem
                    botSettingDto={item.botSettingDto}
                    sessionName={item.sessionName}
                    key={item.id}
                    currentPrice={item.currentPrice}
                    customerName={item.customerName}
                    lastCustomerBet={item.lastCustomerBet}
                    location={item.location}
                    start={item.start}
                    end={item.end}
                    status={item.status}
                    id={item.id}
                    bet={item.bet}
                    setUpState={setUpState}
                    setDownState={setDownState}
                    index={index}
                />)
            }
        </Flex>
    )
})




export const AutoBets = observer(() => {
    return (
        <Flex h="100%" w="680px" p="0 10px 0 0" flexDir="column">
            <PriorityBets />
        </Flex>
    )
})
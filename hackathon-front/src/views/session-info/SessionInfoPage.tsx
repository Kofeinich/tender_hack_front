import React, {useEffect, useState} from 'react';
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import {SessionDescription} from "../../components/sessions/SessionDescription";
import {PageHeader} from "../../components/header/PageHeader";
import {observer} from "mobx-react-lite";
import sessionStore from "../../store/session";
import {Session} from "../../components/sessions/Session";
import {useHistory} from "react-router-dom";
import {getActiveSessionIdApi} from "../../api/session";

export const SessionInfoPage = observer(() => {
    const { sessionData, isLoading } = sessionStore;
    const authToken = localStorage.getItem('authToken');
    const history = useHistory();
    const [ selectedItem, setSelectedItem ] = useState<any>(null);

    useEffect(() => {
        isLoading && console.log(sessionData, 'list')
    }, [isLoading, sessionData])

    return (
        <>
            <header style={{ zIndex: 6 }}>
                <PageHeader />
            </header>
            <Flex
                h={'calc(100vh - 64px)'}
                bgImage="url('/assets/new_back.jpg')"
                bgPosition="center"
                backgroundRepeat="no-repeat"
                justify="center"
                overflow='hidden'
            >
                <Flex h="100%" flexDir="column" overflowY="scroll" mt="13px" ml="30px">
                    {
                        isLoading && sessionData?.map((item, index) => <SessionDescription
                            item={item}
                            setSelected={setSelectedItem}
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
                        />)
                    }
                </Flex>
            </Flex>
        </>
    )
})
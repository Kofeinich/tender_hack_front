import React, {useEffect, useState} from 'react';
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import {observer} from "mobx-react-lite";
import sessionStore from '../../store/session';
import {Session} from "../../components/sessions/Session";
import {PageHeader} from "../../components/header/PageHeader";

export const SessionsPage = observer(() => {
    const { isLoading, session } = sessionStore;

    return (
        <>
            <header style={{ zIndex: 6 }}>
                <PageHeader />
            </header>
            <Flex
                h={'calc(100vh - 64px)'}
                bgImage="url('/assets/back.jpg')"
                bgPosition="center"
                backgroundRepeat="no-repeat"
                justify="center"
            >
                { isLoading &&
                    <Session
                        bet={session.bet}
                        currentPrice={session.currentPrice}
                        customerName={session.customerName}
                        end={session.end}
                        id={session.id}
                        lastCustomerBet={session.lastCustomerBet}
                        location={session.location}
                        sessionName={session.sessionName}
                        start={session.start}
                        status={session.status}
                    />
                }
            </Flex>
        </>
    )
})
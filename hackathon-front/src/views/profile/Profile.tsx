import React from 'react';
import {Box, Text, Button, Flex, Grid, Divider, Stack, chakra, AlertIcon, Alert} from "@chakra-ui/react";
import {PageHeader} from "../../components/header/PageHeader";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import {SettingIcon} from "../../assets/svg/SettingIcon";
import {BetsIcon} from "../../assets/svg/BetsIcon";
import {AutoBestIcon} from "../../assets/svg/AutoBestIcon";
import {NotificationJournal} from "../../assets/svg/NotificationJournal";
import {ProfileSideBar} from "./components/ProfileSideBar";
import {ProfileInfoValues, RegistrationFormValues} from "../auth/types";
import {Form, Formik} from "formik";
import {TextInput} from "../../components/input/TextInput";
import { GrInfo } from "react-icons/gr";
import {Link as RouterLink} from "react-router-dom";
import {Path} from "../../core/router/paths";
import {BackgroundImages} from "../../components/bg/BgImages";
import {ProjectDescription} from "../../components/projectDescription";
import {InfoIcon} from "@chakra-ui/icons";
import {Info} from "@mui/icons-material";
import {SettingProfile} from "./components/SettingProfile";
import {observer} from "mobx-react-lite";
import profileStore from "../../store/profile";
import {YourBets} from "./components/YourBets";
import {AutoBets} from "./components/autobets/AutoBets";
import {NotificationJournalComponent} from "./components/NotificationJournal";

export const Profile = observer(() => {
    const { isProfileActive } = profileStore;
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
            >
                <Flex
                    w='890px'
                    h='550px'
                    bg={'#050407'}
                    color={"#FFFFFF"}
                    position='absolute'
                    mt='52px'
                    borderRadius="6px"
                    pt="18px"
                    pb="18px"
                >
                    <ProfileSideBar />
                    <Divider orientation="vertical" backgroundColor="#3047FE" w="2px"/>
                    {
                        isProfileActive.setting ?
                                <SettingProfile /> :
                            (isProfileActive.yourBets ?
                                <YourBets /> :
                                (isProfileActive.autoBets ?
                                    <AutoBets /> :
                                    <NotificationJournalComponent />
                                )
                            )
                    }
                </Flex>
            </Flex>
        </>
    )
})
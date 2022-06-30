import React, {FC, useState} from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {SettingIcon} from "../../../assets/svg/SettingIcon";
import {BetsIcon} from "../../../assets/svg/BetsIcon";
import {AutoBestIcon} from "../../../assets/svg/AutoBestIcon";
import profileStore from '../../../store/profile';
import {NotificationJournal} from "../../../assets/svg/NotificationJournal";
import {observer} from "mobx-react-lite";

export const ProfileSideBar: FC = observer(() => {
    const { isProfileActive } = profileStore;

    return (
        <Flex h="100%" w="210px" p="37px 21px 18px 24px" flexDir="column">
            <Flex w="165px" h="55px" alignItems="center" pl="10px" border={isProfileActive.setting ? '1px solid #3047FE' : 'none'} borderRadius='4px' cursor="pointer" onClick={() => profileStore.setSettingActive()}>
                <SettingIcon />
                <Text fontSize="16px" lineHeight="19px" fontWeight="400" color="#FFFFFF" ml="14px">
                    Настройки профиля
                </Text>
            </Flex>
            <Flex w="165px" h="55px" alignItems="center" pl="10px" border={isProfileActive.yourBets ? '1px solid #3047FE' : 'none'} borderRadius='4px' cursor="pointer" mt="7px" onClick={() => profileStore.setYourBetsActive()}>
                <BetsIcon />
                <Text fontSize="16px" lineHeight="19px" fontWeight="400" color="#FFFFFF" ml="14px">
                    Ваши ставки
                </Text>
            </Flex>
            <Flex w="165px" h="55px" alignItems="center" pl="10px" border={isProfileActive.autoBets ? '1px solid #3047FE' : 'none'} borderRadius='4px' cursor="pointer" mt="7px" onClick={() => profileStore.setAutoBetsActive()}>
                <AutoBestIcon />
                <Text fontSize="16px" lineHeight="19px" fontWeight="400" color="#FFFFFF" ml="14px">
                    Автоматические ставки
                </Text>
            </Flex>
            <Flex w="165px" h="55px" alignItems="center" pl="10px"  border={isProfileActive.notificationJournal ? '1px solid #3047FE' : 'none'} borderRadius='4px' cursor="pointer" mt="7px" onClick={() => profileStore.setNotificationUrlActive()}>
                <NotificationJournal />
                <Text fontSize="16px" lineHeight="19px" fontWeight="400" color="#FFFFFF" ml="14px">
                    Журнал уведомлений
                </Text>
            </Flex>
        </Flex>
    )
})
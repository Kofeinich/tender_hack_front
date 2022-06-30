import React from 'react';
import {Form, Formik} from "formik";
import {ProfileInfoValues} from "../../auth/types";
import {TextInput} from "../../../components/input/TextInput";
import {Box, Button, chakra, Flex, Text} from "@chakra-ui/react";

export const YourBets = () => {
    return (
        <Flex h="100%" w="680px" p="43px 42px 49px 0" flexDir="column">
            Your Bets
        </Flex>
    )
}
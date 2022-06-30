import React, { FC } from "react";
import {Flex, Link, Text} from "@chakra-ui/react";
import {BackgroundImages} from "../bg/BgImages";

export interface ProjectDescriptionProps {
    desc: string;
    linkText: string;
}

export const ProjectDescription: FC<ProjectDescriptionProps> = ({ desc, linkText }) => {
    return (
        <Flex flexDir="column" pos="absolute" fontSize={'24px'} color={'#fff'} zIndex="10" top="148px" left="381px">
            <Text>
                {desc}
            </Text>
            <Link href={'./xz'} target="_blank" fontSize="14px" color='#1afdff' _hover={{ textDecoration: 'underline' }} d="flex" justifyContent="flex-end">
                {linkText}
            </Link>
        </Flex>
    )
}
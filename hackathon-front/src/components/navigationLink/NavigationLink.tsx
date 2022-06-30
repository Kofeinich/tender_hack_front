import React, { CSSProperties, FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';

type NavigationLinkType = {
  to: string;
  ml?: string;
  text: string;
  activeStyle?: CSSProperties;
};

export const NavigationLink: FC<NavigationLinkType> = ({ text, to, ml, activeStyle }) => {
  return (
    <RouterNavLink
      to={to}
      activeStyle={
        activeStyle || {
          borderBottom: '1px solid #808080',
        }
      }
      style={{
        marginLeft: ml,
        height: '20px',
      }}
    >
      <Box h="100%">
        <Text fontSize="md" lineHeight="20px">
          {text}
        </Text>
      </Box>
    </RouterNavLink>
  );
};

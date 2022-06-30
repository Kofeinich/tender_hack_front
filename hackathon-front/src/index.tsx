import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
// import chakraTheme from './core/chakra/chakraTheme';
// import { ChakraProvider } from '@chakra-ui/react';

// @ts-ignore
ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

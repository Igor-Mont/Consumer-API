import React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { light } from './styles/themes/light'
import { dark } from './styles/themes/dark'
import { BoxSignUp } from './components/BoxSignUp';

const theme = extendTheme({
  colors: {
    light: {
      background: "#f2f2f2"
    },
    dark: {
      background: "#000"
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BoxSignUp />
    </ChakraProvider>
  );
}

export default App;

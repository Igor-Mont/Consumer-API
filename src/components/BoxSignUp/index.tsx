import { Container, Box, Text, Flex, Center, Input, Stack } from "@chakra-ui/react";
import React from "react";

function BoxSignUp(props) {
  console.log(props)

  return (
    <Container maxW='container.sm' h='container.md' border='1px' backgroundColor='light.background' >
      <Flex direction='row' align='center' justify='center' flexDirection='column'>
        <Center border='1px' borderColor='red' flexDirection='column'>
          <Text fontSize='2rem' >Sing Up</Text>
          <Text>Create your account right now</Text>
        </Center>
        <Stack spacing='24px' w='100%' mt='24px'>
          <Input placeholder="Insert your full name" size='lg' variant='flushed' />
          <Input placeholder="Insert your full name" size='lg' variant='flushed' />

        </Stack>
      </Flex>
    </Container>
  );
}

export { BoxSignUp };
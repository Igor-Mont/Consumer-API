import { Container, Box, Text, Flex, Center, Input, Stack, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React, { useState } from "react";

function BoxSignUp(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxW='container.sm' h='container.md' p='24px' border='1px' backgroundColor='light.background' >
      <Flex direction='row' align='center' justify='center' flexDirection='column'>
        <Center flexDirection='column'>
          <Text fontSize='3rem'>Sing Up</Text>
          <Text>Create your account right now</Text>
        </Center>
        <Stack spacing='24px' w='80%' mt='24px'>
          <Input placeholder="Full name" size='lg' variant='flushed' />
          <Input placeholder="Username" size='lg' variant='flushed' />
          <Input placeholder="Email" size='lg' variant='flushed' />
          <InputGroup>
            <Input placeholder="Password" size='lg' variant='flushed' type={ showPassword ? 'text' : 'password'} />
            <InputRightElement width='4.5rem'>
              <Button onClick={() => setShowPassword(!showPassword)}>
                { showPassword ? 'Hide' : 'Show' }
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            <Input placeholder="Repeat Password" size='lg' variant='flushed' type={ showPassword ? 'text' : 'password'} />
            <InputRightElement width='4.5rem'>
              <Button onClick={() => setShowPassword(!showPassword)}>
                { showPassword ? 'Hide' : 'Show' }
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Flex>
    </Container>
  );
}

export { BoxSignUp };
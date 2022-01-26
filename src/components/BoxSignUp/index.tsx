import React, { useState } from "react";
import { Container, Box, Text, Flex, Center, Input, Stack, InputGroup, InputRightElement, Button, FormControl,  FormLabel, FormHelperText } from "@chakra-ui/react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'Too short!').max(40, 'Too long!').required('Name is required!'),
  email: yup.string().email('Invalid email!').required('Email is required!'),
  username: yup.string().min(2, 'Too short!').max(40, 'Too long!').required('Username is required!'),
  password: yup.string().min(6, 'Your password is very short!').max(14, 'Your password is very long!').required('Password is required!'),
  repeatPassword: yup.string().min(6, 'Your password is very short!').max(14, 'Your password is very long!').required('Password is required!'),
});

function BoxSignUp(props) {
  const [showPassword, setShowPassword] = useState(false);


  const { values, touched, errors, handleSubmit, handleChange, handleBlur, isSubmitting } = useFormik({
    onSubmit: () => { console.log('submited') },
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema
  });

  return (
    <Container maxW='container.sm' h='container.md' p='24px' border='1px' backgroundColor='light.background' >
      <Flex direction='row' align='center' justify='center' flexDirection='column'>
        <Center flexDirection='column'>
          <Text fontSize='3rem'>Sing Up</Text>
          <Text>Create your account right now</Text>
        </Center>
        <FormControl isRequired id="name">
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input type='text' value={values.name} onChange={handleChange} placeholder="Name" size='lg' variant='outline' />
          {touched.name && <FormHelperText textColor="#e74c3c">{errors.name}</FormHelperText>}
        </FormControl>
        <FormControl isRequired id="email">
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input type='email' value={values.email} onChange={handleChange} placeholder="Email" size='lg' variant='outline' />
          {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}
        </FormControl>
        <FormControl isRequired id="username">
          <FormLabel htmlFor='username'>Username</FormLabel>
          <Input type='text' value={values.username} onChange={handleChange} placeholder="Username" size='lg' variant='outline' />
          {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText>}
        </FormControl>
        <FormControl isRequired id="password">
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input type='password' value={values.password} onChange={handleChange} placeholder="Password" size='lg' variant='outline' />
          {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
        </FormControl>
        <FormControl isRequired id="repeatPassword">
          <FormLabel htmlFor='repeatPassword'>Repeat password</FormLabel>
          <Input type='password' value={values.repeatPassword} onChange={handleChange} placeholder="Repeat password" size='lg' variant='outline' />
          {touched.repeatPassword && <FormHelperText textColor="#e74c3c">{errors.repeatPassword}</FormHelperText>}
        </FormControl>

        <Box p={4}>
          <Button type="submit" colorScheme="blue" width="100%" onClick={() => handleSubmit()} isLoading={isSubmitting}>Entrar</Button>
        </Box>
      </Flex>
        {/* <Stack spacing='24px' w='80%' mt='24px'>
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
        </Stack> */}
    </Container>
  );
}

export { BoxSignUp };
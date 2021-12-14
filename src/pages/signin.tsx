import { Button, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { Header } from '../components/Header';
import ContactList from './contacts';

export default function SignIn() {
  return (
    <Flex 
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlForm="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="cyan.500"
              bgColor="gray.900"
              _hover={{
                bgColor:"gray.900"
              }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlForm="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="cyan.500"
              bgColor="gray.900"
              _hover={{
                bgColor:"gray.900"
              }}
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button size="lg" type="submit" mt="6" colorScheme="cyan">Entrar</Button>
        <Button size="lg" type="submit" mt="6" colorScheme="cyan">Entrar com o Google</Button>
      </Flex>
    </Flex>
  )
}
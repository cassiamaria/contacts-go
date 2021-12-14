import { Button, Flex, Icon } from '@chakra-ui/react';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

export default function SignIn() {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();

   async function signInContact() {
    if(!user) {
      await signInWithGoogle();
    } 
      router.push('/home');
  }

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
        <Button size="lg" type="submit" mt="6" colorScheme="cyan">Entrar</Button>
          <Button
              size="lg"
              mt="6"
              colorScheme="blue"
              variant='outline'
              leftIcon={<Icon as={FcGoogle} fontSize="20" />}
              onClick={signInContact}
            >Entrar com o Google</Button>
      </Flex>
    </Flex>
  )
}
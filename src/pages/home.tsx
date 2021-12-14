import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import ContactList from './contacts';

export default function Home() {
  return (
    <Flex 
      w="100vw"
      h="100vh"
      direction="column"
    >
      <Header />
        <ContactList />
    </Flex>
  )
}

import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Flex 
      w="100vw"
      // h="100vh"
      align="center" 
      justify="center"
    >
      <Header />
    </Flex>
  )
}

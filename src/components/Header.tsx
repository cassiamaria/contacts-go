import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex 
      as="header"
      w="100%"
      h="20" 
      maxWidth={1480}
      mx="auto"
      px="6"
      align="center"
    > 

      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        ContactsGo
        <Text as="span" ml="1" color="cyan.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Pesquisar contato..."
        />
        
        <Icon as={RiSearchLine} fontSize="20"/>
      </Flex>

      <Flex>
        
      </Flex>
    </Flex>
  );
}
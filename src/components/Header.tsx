import { Flex, Icon, Input, Text } from "@chakra-ui/react";

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
      justify="space-between"
    > 

      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        ContactsGo
        <Text as="span" ml="1" color="cyan.500" fontSize="50">.</Text>
      </Text>


    </Flex>
  );
}
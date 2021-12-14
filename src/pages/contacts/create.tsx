import { Box, Divider, Flex, Heading, Text, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";

export default function CreateContact() {
  return (
    <Box>
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
      </Flex>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar novo contato</Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <Input name="name" label="Nome Completo" />

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="email" label="E-mail" />
              <Input name="phone" label="Número de telefone" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="cep" label="CEP" />
              <Input name="uf" label="UF" />
            </SimpleGrid>

            <Input name="street" label="Logradouro" />

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="district" label="Bairro" />
              <Input name="city" label="Cidade" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spcing="4"> 
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="cyan">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
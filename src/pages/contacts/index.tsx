
import { Box, Button, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiSearchLine } from "react-icons/ri";
import Link from "next/link";
import { getContacts, useContacts } from "../../services/hooks/useContacts";

import { Input } from "../../components/Form/Input";


export default function ContactList() {
  const { data, isLoading, isFetching, error } = useContacts();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const smallBreakpoint = useBreakpointValue({
    base: false,
    sm: true
  });

  return (
    <Box>
      <Flex
        w="100%"
        h="20"
        maxWidth={1480}
        mx="auto"
        px="6"
        align="center"
        justify="space-between"
      >
        <Flex
          as="label"
          flex="1"
          py="4"
          px="8"
          ml="6"
          h="10"
          maxWidth={400}
          alignSelf="center"
          color="gray.200"
          position="relative"
          borderRadius="full"
          align="center"
        >
          <Input
            name="search"
            color="gray.50"
            variant="unstyled"
            px="4"
            mr="4"
            bg="gray.800"
            placeholder="Pesquisar contato..."
          />

          <Icon as={RiSearchLine} fontSize="20" cursor="pointer" />
        </Flex>
      </Flex>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" h="20" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Contatos
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"></Spinner>}
            </Heading>

            <Link href="/contacts/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="cyan"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                cursor="pointer"
              >
              { smallBreakpoint && <Text>Criar novo contato</Text> } 
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos contatos.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>Contatos</Th>
                    {isWideVersion && smallBreakpoint && <Th>Telefone</Th>}
                    {isWideVersion && smallBreakpoint && <Th>Endereço</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(contact => {
                    return (
                      <Tr key={contact.id}>
                        {/* <Link onMouseEnter={() => handlePrefetchContact(contact.id)}>
                                <Text fontWeight="bold">{contact.name}</Text>
                              </Link>
                              <Text fontSize="sm" color="gray.300">{contact.email}</Text> */}
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{contact.name}</Text>
                            <Text fontSize="sm" color="gray.300">{contact.email}</Text>
                          </Box>
                        </Td>

                        {isWideVersion && smallBreakpoint && <Td>{contact.phone}</Td>}

                        {isWideVersion &&
                          <Td>
                            <Box>
                            <Text fontWeight="bold">{contact.street}</Text>
                            <Text fontSize="sm" color="gray.300">{contact.city}</Text>
                            <Text fontSize="sm" color="gray.300">{contact.uf}</Text>
                            </Box>
                          </Td>
                        }
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

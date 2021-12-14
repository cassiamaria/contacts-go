import { Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function ContactList() {
  return (
    <Box>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Contatos</Heading>
            <Button 
              as="a" 
              size="sm"
              fontSize="sm" 
              colorScheme="cyan"
              leftIcon={<Icon as ={RiAddLine} fontSize="20"/>}
              cursor="pointer"
            >
              Criar novo contato
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Número de telefone</Th>
                <Th px="6" color="gray.300" w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Cassia Maria</Text>
                    <Text fontSize="sm" color="gray.300">cassiamariassis@gmail.com</Text>
                  </Box>
                </Td>
                <Td>(98) 9 9194-1987</Td>
                <Td px="6">
                  <Button 
                    as="a" 
                    size="sm"
                    fontSize="sm" 
                    colorScheme="cyan"
                    leftIcon={<Icon as ={RiPencilLine} fontSize="16"/>}
                    cursor="pointer"
                  >Editar</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Cassia Maria</Text>
                    <Text fontSize="sm" color="gray.300">cassiamariassis@gmail.com</Text>
                  </Box>
                </Td>
                <Td>(98) 9 9194-1987</Td>
                <Td px="6">
                  <Button 
                    as="a" 
                    size="sm"
                    fontSize="sm" 
                    colorScheme="cyan"
                    leftIcon={<Icon as ={RiPencilLine} fontSize="16"/>}
                    cursor="pointer"
                  >Editar</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Cassia Maria</Text>
                    <Text fontSize="sm" color="gray.300">cassiamariassis@gmail.com</Text>
                  </Box>
                </Td>
                <Td>(98) 9 9194-1987</Td>
                <Td px="6">
                  <Button 
                    as="a" 
                    size="sm"
                    fontSize="sm" 
                    colorScheme="cyan"
                    leftIcon={<Icon as ={RiPencilLine} fontSize="16"/>}
                    cursor="pointer"
                  >Editar</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
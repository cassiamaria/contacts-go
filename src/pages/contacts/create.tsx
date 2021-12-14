import { 
  Box, 
  Divider, 
  Flex, 
  Heading, 
  Text, VStack, 
  SimpleGrid, 
  HStack, 
  Button 
} from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from "../../components/Form/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


type CreateContactData = {
  id: number;
  name: string;
  phone: number;
  email: string;
  Uf: string;
  street: string;
  district: string;
  city: string;
  cep: number;
};

const createContactFormSchema = yup.object().shape({
  name: yup.string().required('*Nome obrigatório'),
  email: yup.string().required('*E-mail obrigatório').email('*E-mail inválido'),
  campoObrigatorio: yup.string().required('*Campo obrigatório'),
  // phone: yup.number().required(),
  // cep: yup.number().required()

})

export default function CreateContact() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createContactFormSchema)
  });

  const {errors} = formState;

  const handleCreateUser: SubmitHandler<CreateContactData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

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

        <Box 
          as="form"
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar novo contato</Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <Input 
              name="name"
              label="Nome Completo" 
              {...register('name')}
              error={errors.name}
            />

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="email" 
                label="E-mail" 
                {...register('email')}
                error={errors.email}
              />
              <Input 
                name="phone" 
                label="Número de telefone" 
                {...register('phone')} 
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="cep" 
                label="CEP" 
                {...register('cep')}
              />
              <Input
                name="uf" 
                label="UF" 
                {...register('uf')}
                error={errors.campoObrigatorio}
              />
            </SimpleGrid>

            <Input 
              name="street" 
              label="Logradouro" 
              {...register('street')}
              error={errors.campoObrigatorio}
            />

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="district" 
                label="Bairro" 
                {...register('district')}
                error={errors.campoObrigatorio}
              />
              <Input 
                name="city" 
                label="Cidade" 
                {...register('city')}
                error={errors.campoObrigatorio}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button 
                type="submit"
                colorScheme="cyan"
                isLoading={formState.isSubmitting}
              >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
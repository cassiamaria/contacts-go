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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateContactData = {
  id: number;
  name: string;
  phone: number;
  email: string;
  uf: string;
  street: string;
  district: string;
  city: string;
  cep: string;
};

const schema = yup.object({
  name: yup.string().required('* Nome obrigatório'),
  email: yup.string().required('* E-mail obrigatório').email('* E-mail inválido'),
  phone: yup.number().required('* Campo obrigatório'),
  cep: yup.number().required('* Campo obrigatório'),
  uf: yup.string().required('* Campo obrigatório'),
  street: yup.string().required('* Campo obrigatório'),
  district: yup.string().required('* Campo obrigatório'),
  city: yup.string().required('* Campo obrigatório')
}).required();

export default function CreateContact() {

  const router = useRouter();

  const createContact = useMutation(async (contact: CreateContactData) => {
    const response = await api.post('contacts', {
      contact: {
        ...contact,
      }
    })

    return response.data.contact;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('contacts')
    }
  });

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<CreateContactData>({
    //Causa um bug que não me deixa salvar o formulário
    //resolver: yupResolver(schema)
  });

  const handleCreateContact: SubmitHandler<CreateContactData> = async (values) => {
    console.log(values)
      await createContact.mutateAsync(values);
      router.push('/')
      toast.success("Usuário criado com sucesso!")
  }
   //O MirageJs que utilizei pra consumir a fake API não me deixa consumir uma API externa.
   
  // const checkCEP = (event) => {
  //   const { value } = event.target;
  //   const cep = value?.replace(/[^0-9]/g, '');

  //   if (cep?.length !== 8) {
  //     toast.error("CEP inválido!")
  //   }
  //   fetch(`https://viacep.com.br/ws/${cep}/json/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setValue('street', data.logradouro);
  //       setValue('district', data.bairro);
  //       setValue('city', data.localidade);
  //       setValue('uf', data.uf);
  //     })
  //     .catch((err) => console.log(err));
  // }

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
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">Criar novo contato</Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack 
            spacing="8" 
            as="form"
            onSubmit={handleSubmit(handleCreateContact)}
          >
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
                // onBlur={checkCEP}  
              />
              <Input
                name="uf"
                label="UF"
                {...register('uf')}
                error={errors.uf}
              />
              <Input
                name="street"
                label="Logradouro"
                {...register('street')}
                error={errors.street}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="district"
                label="Bairro"
                {...register('district')}
                error={errors.district}
              />
              <Input
                name="city"
                label="Cidade"
                {...register('city')}
                error={errors.city}
              />
            </SimpleGrid>
            
            <Flex mt="8">
              <HStack spacing="4">
                <Link href="/" passHref>
                  <Button as="a" colorScheme="whiteAlpha" size="lg">Cancelar</Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="cyan"
                  size="lg"
                  isLoading={isSubmitting}
                >Salvar</Button>
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
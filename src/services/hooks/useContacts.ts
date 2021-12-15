import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

type Contact = {
  id: string;
  name: string;
  phone: number;
  email: string;
  uf: string;
  street: string;
  district: string;
  city: string;
  cep: string;
}

export async function getContacts(): Promise<Contact[]> {
  const { data } = await api.get('contacts')

  const contacts = data.contacts.map(contact => {
    return {
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      uf: contact.uf,
      street: contact.street,
      district: contact.district,
      city: contact.city,
      cep: contact.cep,
    }
  }) 
  return contacts;
}

export function useContacts() {
  return useQuery('contacts', getContacts, {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })

}
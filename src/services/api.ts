import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

// const cep = 0;
// export const cepApi = axios.create({
//   baseURL: `https://viacep.com.br/ws/${cep}/json/`
// })
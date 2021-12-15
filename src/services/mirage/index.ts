import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs';
import faker from 'faker';

type Contact = {
  name: string;
  phone: number;
  email: string;
  uf: string;
  street: string;
  district: string;
  city: string;
  cep: string;
}

export function makeServer() {
  faker.locale = "pt_BR";
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      contact: Model.extend<Partial<Contact>>({})
    },
    
    factories: {
      contact: Factory.extend({
        
        name() {
          return faker.name.findName();
        }
        ,
        email() {
          return faker.internet.email().toLowerCase();
        }
        ,
        phone() {
          return faker.phone.phoneNumber();
        }
        ,
        uf() {
          return faker.address.state();
        }
        ,
        street() {
          return faker.address.streetName();
        }
        ,
        district() {
          return faker.address.streetAddress();
        }
        ,
        city() {
          return faker.address.city();
        }
        ,
        cep() {
          return faker.address.zipCode();;
        }
      })
    },

    seeds(server) {
      server.createList('contact', 7)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/contacts', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('contact').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const contacts = this.serialize(schema.all('contact'))
          .contacts
          .slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { contacts }
        )
      });

      
      this.get('/contacts/:id');
      this.post('/contacts');

      this.namespace = '';
      this.passthrough()
    }
  })

  return server;
}
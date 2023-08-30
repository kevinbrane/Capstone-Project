import { createServer, Model } from 'miragejs';
import { educationData, skills as defaultSkills } from './db';

export default function startMockServer() {
  return createServer({
    models: {
      skill: Model,      // Definimos un modelo para 'skill'
      education: Model   // Si necesitas manipulaciones similares con educations, también puedes definir un modelo para ello
    },

    seeds(server) {
      // Aquí "sembramos" nuestros datos iniciales
      server.db.loadData({
        skills: defaultSkills
        // education: educationData  // Si definiste un modelo para education, puedes cargar los datos aquí
      });
    },

    routes() {
      this.namespace = 'api'; 

      // Endpoint para educations
      this.get('/educations', () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(educationData);
          }, 3000);
        });
      });

      // Endpoint para obtener habilidades
      this.get('/skills', (schema) => {
        return schema.skills.all();
      });

      // Endpoint para añadir una nueva habilidad
      this.post('/skills', (schema, request) => {
        const newSkill = JSON.parse(request.requestBody);
        return schema.skills.create(newSkill);
      });
    }
  });
}
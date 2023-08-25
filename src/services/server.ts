import { createServer } from 'miragejs';
import { educationData, skills } from './db';

export default function startMockServer() {
  return createServer({
    routes() {
      this.namespace = 'api';  // Prefijo para todos los endpoints
      // Endpoint para educations
      this.get('/educations', () => {
        return educationData;
      },);

      // Endpoint para obtener habilidades
      this.get('/skills', () => {
        return skills;
      });

      // Endpoint para añadir una nueva habilidad
      this.post('/skills', (schema, request) => {
        const newSkill = JSON.parse(request.requestBody);
        console.log(newSkill);
        
        // En una aplicación real, aquí agregarías la nueva habilidad a una base de datos
        return skills.push(newSkill);
      });
    }
  });
}
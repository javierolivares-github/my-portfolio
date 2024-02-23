import { Server } from 'miragejs';
import { projectCollection } from '../data/projectCollection';

let server = new Server();

export const mockServer = () => {
  server.get('/api/projects', {
    data: projectCollection,
  })
}
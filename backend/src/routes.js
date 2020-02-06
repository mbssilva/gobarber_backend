// Importando dependências
import { Router } from 'express';

// Importando controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// Criando as rotas
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;

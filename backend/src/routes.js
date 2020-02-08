// Importando dependências
import { Router } from 'express';

// Importando controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// Importando middlewares
import authMiddleware from './app/middlewares/auth';

// Criando as rotas
const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.store);

export default routes;

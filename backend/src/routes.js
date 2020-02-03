// Importando dependências
import { Router } from 'express';

// Importando controllers
import UserController from './app/controllers/UserController';

// Criando as rotas
const routes = new Router();

routes.post('/users', UserController.store);

export default routes;

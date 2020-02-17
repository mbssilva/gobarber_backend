// Importando dependências
import { Router } from 'express';
import multer from 'multer';

// Importando controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

// Importando middlewares
import authMiddleware from './app/middlewares/auth';

// Importando configurações e configurando-as
import multerConfig from './config/multer';

const upload = multer(multerConfig);

// Criando as rotas
const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.store);

routes.post('/files', authMiddleware, upload.single('file'), FileController.store);

routes.get('/providers', authMiddleware, ProviderController.index);

routes.post('/appointments', authMiddleware, AppointmentController.store);
routes.get('/appointments', authMiddleware, AppointmentController.index);
routes.delete('/appointments/:id', authMiddleware, AppointmentController.delete);

routes.get('/schedules', authMiddleware, ScheduleController.index);

routes.get('/notifications', authMiddleware, NotificationController.index);
routes.put('/notifications/:id', authMiddleware, NotificationController.update);

export default routes;

import { Router } from 'express';
import UserController from '../controllers/users.controller';

const router = Router();

const usersControllers = new UserController();

const userSlashId = '/users/:id';

router.get('/users', usersControllers.getAll);
router.get(userSlashId, usersControllers.getById);
router.post('/users', usersControllers.create);
router.put(userSlashId, usersControllers.update);
router.delete(userSlashId, usersControllers.remove);

export default router;
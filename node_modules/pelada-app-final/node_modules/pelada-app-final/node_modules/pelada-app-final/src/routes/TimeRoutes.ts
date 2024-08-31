import { Router } from 'express';
import { TimeController } from '../controllers/TimeController';

const router = Router();
const timeController = new TimeController();

router.post('/times', timeController.create);
router.get('/times', timeController.findAll);

export default router;

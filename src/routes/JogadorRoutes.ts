import { Router } from 'express';
import { JogadorController } from '../controllers/JogadorController';

const router = Router();
const jogadorController = new JogadorController();

router.post('/jogadores', jogadorController.create);
router.get('/jogadores', jogadorController.findAll);
router.get('/jogadores/:id', jogadorController.findOne);
router.delete('/jogadores/:id', jogadorController.delete);
router.get('/jogadores/ranking', jogadorController.getRanking);

export default router;

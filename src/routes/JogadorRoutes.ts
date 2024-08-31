import { Router } from 'express';
import { JogadorController } from '../controllers/JogadorController';

const router = Router();
const jogadorController = new JogadorController();

router.post('/jogadores', jogadorController.create);
router.get('/jogadores', jogadorController.findAll);
router.get('/jogadores/:id', jogadorController.findOne);
router.delete('/jogadores/:id', jogadorController.delete);
router.get('/jogadores/ranking', jogadorController.getRanking);

// Novas rotas para listagem em PDF
router.get('/jogadores/gols/desc/pdf', jogadorController.listarPorGolsDecrescentePDF);

router.get('/jogadores/assistencias/desc/pdf', jogadorController.listarPorAssistenciasDecrescentePDF);


export default router;

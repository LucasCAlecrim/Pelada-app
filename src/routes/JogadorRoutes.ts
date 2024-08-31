import { Router } from 'express';
import { JogadorController } from '../controllers/JogadorController';

const router = Router();
const jogadorController = new JogadorController();

router.post('/jogadores', jogadorController.create);
router.get('/jogadores', jogadorController.findAll);
router.get('/jogadores/:id', jogadorController.findOne);
router.delete('/jogadores/:id', jogadorController.delete);
router.get('/jogadores/ranking', jogadorController.getRanking);

router.get('/jogadores/gols/desc', jogadorController.listarPorGolsDecrescente);
router.get('/jogadores/assistencias/desc', jogadorController.listarPorAssistenciasDecrescente);
router.get('/jogadores/gols/asc', jogadorController.listarPorGolsCrescente);
router.get('/jogadores/assistencias/asc', jogadorController.listarPorAssistenciasCrescente);

export default router;

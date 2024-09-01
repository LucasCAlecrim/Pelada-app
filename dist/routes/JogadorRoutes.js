"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JogadorController_1 = require("../controllers/JogadorController");
const router = (0, express_1.Router)();
const jogadorController = new JogadorController_1.JogadorController();
router.post('/jogadores', jogadorController.create);
router.get('/jogadores', jogadorController.findAll);
router.get('/jogadores/:id', jogadorController.findOne);
router.delete('/jogadores/:id', jogadorController.delete);
// Novas rotas para listagem em PDF
router.get('/jogadores/gols/desc/pdf', jogadorController.listarPorGolsDecrescentePDF);
router.get('/jogadores/assistencias/desc/pdf', jogadorController.listarPorAssistenciasDecrescentePDF);
exports.default = router;

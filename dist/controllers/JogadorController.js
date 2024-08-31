"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadorController = void 0;
const JogadorService_1 = require("../services/JogadorService");
const jogadorService = new JogadorService_1.JogadorService();
class JogadorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jogador = yield jogadorService.create(req.body);
            return res.json(jogador);
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield jogadorService.findAll();
            return res.json(jogadores);
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jogador = yield jogadorService.findOne(Number(req.params.id));
            return jogador ? res.json(jogador) : res.status(404).json({ message: 'Jogador não encontrado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield jogadorService.delete(Number(req.params.id));
            return res.status(204).send();
        });
    }
    getRanking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ranking = yield jogadorService.getRanking();
            return res.json(ranking);
        });
    }
}
exports.JogadorController = JogadorController;

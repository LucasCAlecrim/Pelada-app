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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadorController = void 0;
const JogadorService_1 = require("../services/JogadorService");
const pdfkit_1 = __importDefault(require("pdfkit"));
const jogadorService = new JogadorService_1.JogadorService();
class JogadorController {
    constructor() {
        // Métodos para gerar PDFs
        this.gerarPdfJogadores = (jogadores, titulo, res) => __awaiter(this, void 0, void 0, function* () {
            const doc = new pdfkit_1.default();
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=${titulo}.pdf`);
            doc.pipe(res);
            doc.fontSize(20).text(titulo, { align: 'center' });
            doc.moveDown();
            jogadores.forEach(jogador => {
                doc.fontSize(12).text(`Apelido: ${jogador.apelido}`);
                doc.text(`Gols: ${jogador.gols}`);
                doc.text(`Assistências: ${jogador.assistencias}`);
                doc.text(`Posição: ${jogador.posicao}`);
                doc.moveDown();
            });
            doc.end();
        });
        this.listarPorGolsDecrescentePDF = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield jogadorService.listarPorGolsDecrescente();
            yield this.gerarPdfJogadores(jogadores, 'Jogadores - Gols Decrescente', res);
        });
        this.listarPorAssistenciasDecrescentePDF = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield jogadorService.listarPorAssistenciasDecrescente();
            yield this.gerarPdfJogadores(jogadores, 'Jogadores - Assistências Decrescente', res);
        });
    }
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
}
exports.JogadorController = JogadorController;

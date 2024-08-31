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
exports.JogadorService = void 0;
const DataSource_1 = require("../database/DataSource");
const Jogador_1 = require("../models/Jogador");
class JogadorService {
    constructor() {
        this.jogadorRepository = DataSource_1.AppDataSource.getRepository(Jogador_1.Jogador);
    }
    create(jogador) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.jogadorRepository.save(jogador);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield this.jogadorRepository.find();
            return jogadores.map(({ id, apelido, gols, assistencias, posicao }) => ({
                id,
                apelido,
                gols,
                assistencias,
                posicao,
            }));
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.jogadorRepository.findOneBy({ id });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.jogadorRepository.delete(id);
        });
    }
    getRanking() {
        return __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield this.jogadorRepository.find({
                order: {
                    gols: 'DESC',
                    assistencias: 'DESC',
                },
            });
            return jogadores.map(({ id, apelido, gols, assistencias, posicao }) => ({
                id,
                apelido,
                gols,
                assistencias,
                posicao,
            }));
        });
    }
    listarPorGolsDecrescente() {
        return __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield this.jogadorRepository.find({
                order: {
                    gols: 'DESC',
                },
            });
            return jogadores.map(({ id, apelido, gols, assistencias, posicao }) => ({
                id,
                apelido,
                gols,
                assistencias,
                posicao,
            }));
        });
    }
    listarPorAssistenciasDecrescente() {
        return __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield this.jogadorRepository.find({
                order: {
                    assistencias: 'DESC',
                },
            });
            return jogadores.map(({ id, apelido, gols, assistencias, posicao }) => ({
                id,
                apelido,
                gols,
                assistencias,
                posicao,
            }));
        });
    }
    listarPorGolsCrescente() {
        return __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield this.jogadorRepository.find({
                order: {
                    gols: 'ASC',
                },
            });
            return jogadores.map(({ id, apelido, gols, assistencias, posicao }) => ({
                id,
                apelido,
                gols,
                assistencias,
                posicao,
            }));
        });
    }
    listarPorAssistenciasCrescente() {
        return __awaiter(this, void 0, void 0, function* () {
            const jogadores = yield this.jogadorRepository.find({
                order: {
                    assistencias: 'ASC',
                },
            });
            return jogadores.map(({ id, apelido, gols, assistencias, posicao }) => ({
                id,
                apelido,
                gols,
                assistencias,
                posicao,
            }));
        });
    }
}
exports.JogadorService = JogadorService;

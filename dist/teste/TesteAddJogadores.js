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
const DataSource_1 = require("../database/DataSource");
const Jogador_1 = require("../models/Jogador");
const Time_1 = require("../models/Time");
function adicionarJogadores() {
    return __awaiter(this, void 0, void 0, function* () {
        yield DataSource_1.AppDataSource.initialize();
        // Criação dos Times
        const time1 = new Time_1.Time();
        time1.nome = 'Time A';
        yield DataSource_1.AppDataSource.getRepository(Time_1.Time).save(time1);
        const time2 = new Time_1.Time();
        time2.nome = 'Time B';
        yield DataSource_1.AppDataSource.getRepository(Time_1.Time).save(time2);
        const time3 = new Time_1.Time();
        time3.nome = 'Time C';
        yield DataSource_1.AppDataSource.getRepository(Time_1.Time).save(time3);
        // Criação dos Jogadores
        const jogadores = [
            { nome: 'Neymar Jr', apelido: 'Ney', gols: 15, assistencias: 7, vitorias: 5, time: time1 },
            { nome: 'Cristiano Ronaldo', apelido: 'CR7', gols: 20, assistencias: 10, vitorias: 8, time: time1 },
            { nome: 'Lionel Messi', apelido: 'Messi', gols: 18, assistencias: 9, vitorias: 7, time: time1 },
            { nome: 'Kylian Mbappé', apelido: 'Mbappé', gols: 22, assistencias: 11, vitorias: 6, time: time2 },
            { nome: 'Robert Lewandowski', apelido: 'Lewy', gols: 19, assistencias: 8, vitorias: 7, time: time2 },
            { nome: 'Karim Benzema', apelido: 'Benzema', gols: 16, assistencias: 6, vitorias: 5, time: time2 },
            { nome: 'Virgil van Dijk', apelido: 'Van Dijk', gols: 8, assistencias: 4, vitorias: 6, time: time3 },
            { nome: 'Sergio Ramos', apelido: 'Ramos', gols: 9, assistencias: 3, vitorias: 7, time: time3 },
            { nome: 'Kevin De Bruyne', apelido: 'De Bruyne', gols: 12, assistencias: 13, vitorias: 8, time: time3 },
            { nome: 'Luka Modrić', apelido: 'Modrić', gols: 7, assistencias: 7, vitorias: 6, time: time1 },
            { nome: 'Paul Pogba', apelido: 'Pogba', gols: 11, assistencias: 6, vitorias: 5, time: time2 },
            { nome: 'Kante N’Golo', apelido: 'Kante', gols: 6, assistencias: 5, vitorias: 7, time: time2 },
            { nome: 'Edinson Cavani', apelido: 'Cavani', gols: 14, assistencias: 4, vitorias: 6, time: time3 },
            { nome: 'Gareth Bale', apelido: 'Bale', gols: 10, assistencias: 5, vitorias: 4, time: time1 },
            { nome: 'Eden Hazard', apelido: 'Hazard', gols: 9, assistencias: 7, vitorias: 5, time: time1 },
            { nome: 'Thomas Müller', apelido: 'Müller', gols: 13, assistencias: 8, vitorias: 6, time: time2 },
            { nome: 'Manuel Neuer', apelido: 'Neuer', gols: 0, assistencias: 0, vitorias: 8, time: time2 },
            { nome: 'Marc-André ter Stegen', apelido: 'Ter Stegen', gols: 0, assistencias: 0, vitorias: 6, time: time3 },
            { nome: 'Jan Oblak', apelido: 'Oblak', gols: 0, assistencias: 0, vitorias: 7, time: time3 },
            { nome: 'Alisson Becker', apelido: 'Alisson', gols: 0, assistencias: 0, vitorias: 5, time: time2 },
            { nome: 'Keylor Navas', apelido: 'Navas', gols: 0, assistencias: 0, vitorias: 4, time: time1 },
        ];
        for (const jogadorData of jogadores) {
            const jogador = new Jogador_1.Jogador();
            jogador.nome = jogadorData.nome;
            jogador.apelido = jogadorData.apelido;
            jogador.gols = jogadorData.gols;
            jogador.assistencias = jogadorData.assistencias;
            jogador.vitorias = jogadorData.vitorias;
            jogador.time = jogadorData.time;
            yield DataSource_1.AppDataSource.getRepository(Jogador_1.Jogador).save(jogador);
        }
        console.log('Jogadores e times adicionados com sucesso!');
    });
}
adicionarJogadores();

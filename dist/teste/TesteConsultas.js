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
function executarConsultas() {
    return __awaiter(this, void 0, void 0, function* () {
        yield DataSource_1.AppDataSource.initialize();
        const queryRunner = DataSource_1.AppDataSource.createQueryRunner();
        try {
            // 1. Jogadores que estão no mesmo time
            console.log('Jogadores que estão no mesmo time:');
            const sameTeamQuery = `
            SELECT j1.nome AS jogador1, j2.nome AS jogador2, t.nome AS time
            FROM Jogador j1
            JOIN Jogador j2 ON j1.timeId = j2.timeId
            JOIN Time t ON j1.timeId = t.id
            WHERE j1.id < j2.id;
        `;
            const sameTeamResult = yield queryRunner.query(sameTeamQuery);
            console.table(sameTeamResult);
            // 2. Jogadores com mais de 5 gols
            console.log('Jogadores com mais de 5 gols:');
            const moreThan5GoalsQuery = `
            SELECT nome, apelido, gols, assistencias, vitorias, timeId
            FROM Jogador
            WHERE gols > 5;
        `;
            const moreThan5GoalsResult = yield queryRunner.query(moreThan5GoalsQuery);
            console.table(moreThan5GoalsResult);
            // 3. Jogadores com menos de 5 gols
            console.log('Jogadores com menos de 5 gols:');
            const lessThan5GoalsQuery = `
            SELECT nome, apelido, gols, assistencias, vitorias, timeId
            FROM Jogador
            WHERE gols < 5;
        `;
            const lessThan5GoalsResult = yield queryRunner.query(lessThan5GoalsQuery);
            console.table(lessThan5GoalsResult);
            // 4. Jogadores ordenados por assistências em ordem decrescente
            console.log('Jogadores ordenados por assistências (decrescente):');
            const assistancesDescQuery = `
            SELECT nome, apelido, assistencias
            FROM Jogador
            ORDER BY assistencias DESC;
        `;
            const assistancesDescResult = yield queryRunner.query(assistancesDescQuery);
            console.table(assistancesDescResult);
            // 5. Jogadores ordenados por assistências em ordem crescente
            console.log('Jogadores ordenados por assistências (crescente):');
            const assistancesAscQuery = `
                    SELECT nome, apelido, assistencias
                    FROM Jogador
                    ORDER BY assistencias ASC;
                `;
            const assistancesAscResult = yield queryRunner.query(assistancesAscQuery);
            console.table(assistancesAscResult);
            // 6. Jogadores ordenados por gols em ordem decrescente
            console.log('Jogadores ordenados por gols (decrescente):');
            const goalsDescQuery = `
                    SELECT nome, apelido, gols
                    FROM Jogador
                    ORDER BY gols DESC;
                `;
            const goalsDescResult = yield queryRunner.query(goalsDescQuery);
            console.table(goalsDescResult);
            // 7. Jogadores ordenados por gols em ordem crescente
            console.log('Jogadores ordenados por gols (crescente):');
            const goalsAscQuery = `
                    SELECT nome, apelido, gols
                    FROM Jogador
                    ORDER BY gols ASC;
                `;
            const goalsAscResult = yield queryRunner.query(goalsAscQuery);
            console.table(goalsAscResult);
            // 8. Jogadores ordenados por posição
            console.log('Jogadores ordenados por posição:');
            const positionQuery = `
                    SELECT nome, apelido, posicao
                    FROM Jogador
                    ORDER BY posicao;
                `;
            const positionResult = yield queryRunner.query(positionQuery);
            console.table(positionResult);
        }
        finally {
            yield queryRunner.release();
            yield DataSource_1.AppDataSource.destroy();
        }
    });
}
executarConsultas();

import { AppDataSource } from '../database/DataSource';

async function executarConsultas() {
    await AppDataSource.initialize();
    const queryRunner = AppDataSource.createQueryRunner();

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
        const sameTeamResult = await queryRunner.query(sameTeamQuery);
        console.table(sameTeamResult);

        // 2. Jogadores com mais de 5 gols
        console.log('Jogadores com mais de 5 gols:');
        const moreThan5GoalsQuery = `
            SELECT nome, apelido, gols, assistencias, vitorias, timeId
            FROM Jogador
            WHERE gols > 5;
        `;
        const moreThan5GoalsResult = await queryRunner.query(moreThan5GoalsQuery);
        console.table(moreThan5GoalsResult);

        // 3. Jogadores com menos de 5 gols
        console.log('Jogadores com menos de 5 gols:');
        const lessThan5GoalsQuery = `
            SELECT nome, apelido, gols, assistencias, vitorias, timeId
            FROM Jogador
            WHERE gols < 5;
        `;
        const lessThan5GoalsResult = await queryRunner.query(lessThan5GoalsQuery);
        console.table(lessThan5GoalsResult);

        // 4. Jogadores ordenados por assistências em ordem decrescente
        console.log('Jogadores ordenados por assistências (decrescente):');
        const assistancesDescQuery = `
            SELECT nome, apelido, assistencias
            FROM Jogador
            ORDER BY assistencias DESC;
        `;
        const assistancesDescResult = await queryRunner.query(assistancesDescQuery);
        console.table(assistancesDescResult);

        // 5. Jogadores ordenados por assistências em ordem crescente
        console.log('Jogadores ordenados por assistências (crescente):');
        const assistancesAscQuery = `
                    SELECT nome, apelido, assistencias
                    FROM Jogador
                    ORDER BY assistencias ASC;
                `;
        const assistancesAscResult = await queryRunner.query(assistancesAscQuery);
        console.table(assistancesAscResult);

        // 6. Jogadores ordenados por gols em ordem decrescente
        console.log('Jogadores ordenados por gols (decrescente):');
        const goalsDescQuery = `
                    SELECT nome, apelido, gols
                    FROM Jogador
                    ORDER BY gols DESC;
                `;
        const goalsDescResult = await queryRunner.query(goalsDescQuery);
        console.table(goalsDescResult);

        // 7. Jogadores ordenados por gols em ordem crescente
        console.log('Jogadores ordenados por gols (crescente):');
        const goalsAscQuery = `
                    SELECT nome, apelido, gols
                    FROM Jogador
                    ORDER BY gols ASC;
                `;
        const goalsAscResult = await queryRunner.query(goalsAscQuery);
        console.table(goalsAscResult);

        // 8. Jogadores ordenados por posição
        console.log('Jogadores ordenados por posição:');
        const positionQuery = `
                    SELECT nome, apelido, posicao
                    FROM Jogador
                    ORDER BY posicao;
                `;
        const positionResult = await queryRunner.query(positionQuery);
        console.table(positionResult);

    } finally {
        await queryRunner.release();
        await AppDataSource.destroy();
    }
}

executarConsultas();

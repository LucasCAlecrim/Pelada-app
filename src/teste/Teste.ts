import { AppDataSource } from '../database/DataSource';
import { Jogador } from '../models/Jogador';
import { Time } from '../models/Time';

async function main() {
    await AppDataSource.initialize();

    // Criação dos Times
    const time1 = new Time();
    time1.nome = 'Time A';
    await AppDataSource.getRepository(Time).save(time1);

    const time2 = new Time();
    time2.nome = 'Time B';
    await AppDataSource.getRepository(Time).save(time2);

    const time3 = new Time();
    time3.nome = 'Time C';
    await AppDataSource.getRepository(Time).save(time3);

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
        const jogador = new Jogador();
        jogador.nome = jogadorData.nome;
        jogador.apelido = jogadorData.apelido;
        jogador.gols = jogadorData.gols;
        jogador.assistencias = jogadorData.assistencias;
        jogador.vitorias = jogadorData.vitorias;
        jogador.time = jogadorData.time;
        await AppDataSource.getRepository(Jogador).save(jogador);
    }

    // Executar Consultas
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

        // 6. Jogadores com mais gols e mais assistências
        console.log('Jogadores com mais gols e mais assistências:');
        const goalsAssistancesQuery = `
            SELECT nome, apelido, gols, assistencias
            FROM Jogador
            ORDER BY gols DESC, assistencias DESC;
        `;
        const goalsAssistancesResult = await queryRunner.query(goalsAssistancesQuery);
        console.table(goalsAssistancesResult);

        // 7. Jogadores de um time específico
        console.log('Jogadores do Time A:');
        const teamQuery = `
            SELECT j.nome, j.apelido, j.gols, j.assistencias
            FROM Jogador j
            JOIN Time t ON j.timeId = t.id
            WHERE t.nome = 'Time A';
        `;
        const teamResult = await queryRunner.query(teamQuery);
        console.table(teamResult);

        // 8. Jogadores com o maior número de vitórias
        console.log('Jogadores com o maior número de vitórias:');
        const victoriesDescQuery = `
            SELECT nome, apelido, vitorias
            FROM Jogador
            ORDER BY vitorias DESC;
        `;
        const victoriesDescResult = await queryRunner.query(victoriesDescQuery);
        console.table(victoriesDescResult);

        // 9. Jogadores com o menor número de vitórias
        console.log('Jogadores com o menor número de vitórias:');
        const victoriesAscQuery = `
            SELECT nome, apelido, vitorias
            FROM Jogador
            ORDER BY vitorias ASC;

            `;
            const victoriesAscResult = await queryRunner.query(victoriesAscQuery);
            console.table(victoriesAscResult);
    
            // 10. Jogadores que jogam em mais de um time
            console.log('Jogadores que jogam em mais de um time:');
            const multipleTeamsQuery = `
                SELECT nome, apelido
                FROM Jogador
                GROUP BY nome, apelido
                HAVING COUNT(DISTINCT timeId) > 1;
            `;
            const multipleTeamsResult = await queryRunner.query(multipleTeamsQuery);
            console.table(multipleTeamsResult);
    
        } catch (error) {
            console.error('Erro ao executar as consultas:', error);
        } finally {
            await queryRunner.release();
        }
    }
    
    main().catch(console.error);
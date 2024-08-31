import { AppDataSource } from '../database/DataSource';
import { Time } from '../models/Time';
import { Jogador } from '../models/Jogador';

async function main() {
    await AppDataSource.initialize();

    // Criação dos Times
    const time1 = new Time();
    time1.nome = 'Time A';
    await AppDataSource.manager.save(time1);

    const time2 = new Time();
    time2.nome = 'Time B';
    await AppDataSource.manager.save(time2);

    const time3 = new Time();
    time3.nome = 'Time C';
    await AppDataSource.manager.save(time3);

    // Criação dos Jogadores
    const jogador1 = new Jogador();
    jogador1.nome = 'Jogador 1';
    jogador1.apelido = 'J1';
    jogador1.gols = 10;
    jogador1.assistencias = 5;
    jogador1.vitorias = 3;
    jogador1.time = time1;
    await AppDataSource.manager.save(jogador1);

    const jogador2 = new Jogador();
    jogador2.nome = 'Jogador 2';
    jogador2.apelido = 'J2';
    jogador2.gols = 7;
    jogador2.assistencias = 8;
    jogador2.vitorias = 4;
    jogador2.time = time2;
    await AppDataSource.manager.save(jogador2);

    const jogador3 = new Jogador();
    jogador3.nome = 'Jogador 3';
    jogador3.apelido = 'J3';
    jogador3.gols = 12;
    jogador3.assistencias = 6;
    jogador3.vitorias = 5;
    jogador3.time = time3;
    await AppDataSource.manager.save(jogador3);

    await AppDataSource.destroy();
}

main().catch(error => console.error('Erro ao executar o script:', error));

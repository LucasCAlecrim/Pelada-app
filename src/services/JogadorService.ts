import { AppDataSource } from '../database/DataSource';
import { Jogador } from '../models/Jogador';
import { JogadorDTO } from '../dto/JogadorDTO';

export class JogadorService {
    private jogadorRepository = AppDataSource.getRepository(Jogador);


    async create(jogador: Jogador): Promise<Jogador> {
        return await this.jogadorRepository.save(jogador);
    }


    async findAll(): Promise<JogadorDTO[]> {
        const jogadores = await this.jogadorRepository.find();
        return jogadores.map(({ id, apelido, gols, assistencias, posicao }) => ({
            id,
            apelido,
            gols,
            assistencias,
            posicao,
        }));
    }


    async findOne(id: number): Promise<Jogador | null> {
        return await this.jogadorRepository.findOneBy({ id });
    }


    async delete(id: number): Promise<void> {
        await this.jogadorRepository.delete(id);
    }





    async listarPorGolsDecrescente(): Promise<JogadorDTO[]> {
        const jogadores = await this.jogadorRepository.find({
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
    }


    async listarPorAssistenciasDecrescente(): Promise<JogadorDTO[]> {
        const jogadores = await this.jogadorRepository.find({
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
    }


    async listarPorGolsCrescente(): Promise<JogadorDTO[]> {
        const jogadores = await this.jogadorRepository.find({
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
    }


    async listarPorAssistenciasCrescente(): Promise<JogadorDTO[]> {
        const jogadores = await this.jogadorRepository.find({
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
    }
}

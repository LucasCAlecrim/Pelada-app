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

    async getRanking(): Promise<JogadorDTO[]> {
        const jogadores = await this.jogadorRepository.find({
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
    }
}

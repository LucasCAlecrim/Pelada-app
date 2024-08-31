import { Request, Response } from 'express';
import { JogadorService } from '../services/JogadorService';

const jogadorService = new JogadorService();

export class JogadorController {
    async create(req: Request, res: Response): Promise<Response> {
        const jogador = await jogadorService.create(req.body);
        return res.json(jogador);
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        const jogadores = await jogadorService.findAll();
        return res.json(jogadores);
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        const jogador = await jogadorService.findOne(Number(req.params.id));
        return jogador ? res.json(jogador) : res.status(404).json({ message: 'Jogador não encontrado' });
    }

    async delete(req: Request, res: Response): Promise<Response> {
        await jogadorService.delete(Number(req.params.id));
        return res.status(204).send();
    }

    async getRanking(req: Request, res: Response): Promise<Response> {
        const ranking = await jogadorService.getRanking();
        return res.json(ranking);
    }

    async listarPorGolsDecrescente(req: Request, res: Response): Promise<Response> {
        const jogadores = await jogadorService.listarPorGolsDecrescente();
        return res.json(jogadores);
    }

    async listarPorAssistenciasDecrescente(req: Request, res: Response): Promise<Response> {
        const jogadores = await jogadorService.listarPorAssistenciasDecrescente();
        return res.json(jogadores);
    }

    async listarPorGolsCrescente(req: Request, res: Response): Promise<Response> {
        const jogadores = await jogadorService.listarPorGolsCrescente();
        return res.json(jogadores);
    }

    async listarPorAssistenciasCrescente(req: Request, res: Response): Promise<Response> {
        const jogadores = await jogadorService.listarPorAssistenciasCrescente();
        return res.json(jogadores);
    }
}

import { Request, Response } from 'express';
import { JogadorService } from '../services/JogadorService';
import PDFDocument from 'pdfkit';

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

    // Métodos para gerar PDFs
    private async gerarPdfJogadores(jogadores: any[], titulo: string, res: Response) {
        const doc = new PDFDocument();
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
    }

    async listarPorGolsDecrescentePDF(req: Request, res: Response): Promise<void> {
        const jogadores = await jogadorService.listarPorGolsDecrescente();
        await this.gerarPdfJogadores(jogadores, 'Jogadores - Gols Decrescente', res);
    }

    async listarPorGolsCrescentePDF(req: Request, res: Response): Promise<void> {
        const jogadores = await jogadorService.listarPorGolsCrescente();
        await this.gerarPdfJogadores(jogadores, 'Jogadores - Gols Crescente', res);
    }

    async listarPorAssistenciasDecrescentePDF(req: Request, res: Response): Promise<void> {
        const jogadores = await jogadorService.listarPorAssistenciasDecrescente();
        await this.gerarPdfJogadores(jogadores, 'Jogadores - Assistências Decrescente', res);
    }

    async listarPorAssistenciasCrescentePDF(req: Request, res: Response): Promise<void> {
        const jogadores = await jogadorService.listarPorAssistenciasCrescente();
        await this.gerarPdfJogadores(jogadores, 'Jogadores - Assistências Crescente', res);
    }
}

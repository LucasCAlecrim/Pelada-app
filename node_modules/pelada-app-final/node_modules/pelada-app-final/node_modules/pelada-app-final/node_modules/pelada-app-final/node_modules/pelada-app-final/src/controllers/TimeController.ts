import { Request, Response } from 'express';
import { TimeService } from '../services/TimeService';

const timeService = new TimeService();

export class TimeController {
    async create(req: Request, res: Response): Promise<Response> {
        const time = await timeService.create(req.body);
        return res.json(time);
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        const times = await timeService.findAll();
        return res.json(times);
    }
}

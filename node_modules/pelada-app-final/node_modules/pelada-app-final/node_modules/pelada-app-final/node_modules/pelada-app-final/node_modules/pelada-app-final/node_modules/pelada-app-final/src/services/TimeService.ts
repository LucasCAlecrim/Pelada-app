import { AppDataSource } from '../database/DataSource';
import { Time } from '../models/Time';

export class TimeService {
    private timeRepository = AppDataSource.getRepository(Time);

    async create(time: Time): Promise<Time> {
        return await this.timeRepository.save(time);
    }

    async findAll(): Promise<Time[]> {
        return await this.timeRepository.find({ relations: ['jogadores'] });
    }
}

import { DataSource } from 'typeorm';
import { Jogador } from '../models/Jogador';
import { Time } from '../models/Time';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'pelada-app',
    entities: [Jogador, Time],
    synchronize: true,  
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Jogador_1 = require("../models/Jogador");
const Time_1 = require("../models/Time");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'pelada-app',
    entities: [Jogador_1.Jogador, Time_1.Time],
    synchronize: true,
});

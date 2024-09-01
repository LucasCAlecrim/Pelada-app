"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const DataSource_1 = require("./database/DataSource");
const JogadorRoutes_1 = __importDefault(require("./routes/JogadorRoutes"));
const TimeRoutes_1 = __importDefault(require("./routes/TimeRoutes"));
const swagger_json_1 = __importDefault(require("../swagger/swagger.json"));
const app = (0, express_1.default)();
// Configuração do CORS
app.use((0, cors_1.default)({
    origin: '*', // Permite todas as origens. Ajuste conforme necessário.
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express_1.default.json());
// Rotas
app.use('/api', JogadorRoutes_1.default);
app.use('/api', TimeRoutes_1.default);
// Swagger
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
// Inicialização do banco de dados
DataSource_1.AppDataSource.initialize()
    .then(() => {
    console.log('Banco de dados conectado');
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
})
    .catch((error) => console.log('Erro ao conectar ao banco de dados', error));

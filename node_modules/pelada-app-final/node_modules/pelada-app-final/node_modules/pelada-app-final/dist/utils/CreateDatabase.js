"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const DataSource_1 = require("../database/DataSource");
function createDatabaseIfNotExists() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield promise_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
        });
        const databaseName = process.env.DB_NAME || 'pelada-app';
        try {
            const [rows] = yield connection.query('SHOW DATABASES LIKE ?', [databaseName]);
            if (rows.length === 0) {
                yield connection.query('CREATE DATABASE ??', [databaseName]);
                console.log(`Database '${databaseName}' criada com sucesso.`);
            }
            else {
                console.log(`Database '${databaseName}' ja existe.`);
            }
        }
        catch (error) {
            console.error('Erro criando a database:', error);
        }
        finally {
            yield connection.end();
        }
    });
}
function initializeDataSource() {
    return __awaiter(this, void 0, void 0, function* () {
        yield DataSource_1.AppDataSource.initialize();
        console.log('DataSource initialized successfully.');
    });
}
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createDatabaseIfNotExists();
        yield initializeDataSource();
    });
}
setup().catch(error => console.error('Setup failed:', error));

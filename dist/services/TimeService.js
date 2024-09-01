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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeService = void 0;
const DataSource_1 = require("../database/DataSource");
const Time_1 = require("../models/Time");
class TimeService {
    constructor() {
        this.timeRepository = DataSource_1.AppDataSource.getRepository(Time_1.Time);
    }
    create(time) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.timeRepository.save(time);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.timeRepository.find({ relations: ['jogadores'] });
        });
    }
    update(id, updatedTime) {
        return __awaiter(this, void 0, void 0, function* () {
            const time = yield this.timeRepository.findOneBy({ id });
            if (!time) {
                return null;
            }
            this.timeRepository.merge(time, updatedTime);
            return yield this.timeRepository.save(time);
        });
    }
}
exports.TimeService = TimeService;

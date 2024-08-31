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
exports.TimeController = void 0;
const TimeService_1 = require("../services/TimeService");
const timeService = new TimeService_1.TimeService();
class TimeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const time = yield timeService.create(req.body);
            return res.json(time);
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const times = yield timeService.findAll();
            return res.json(times);
        });
    }
}
exports.TimeController = TimeController;

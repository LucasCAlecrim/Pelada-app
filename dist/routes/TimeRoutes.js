"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TimeController_1 = require("../controllers/TimeController");
const router = (0, express_1.Router)();
const timeController = new TimeController_1.TimeController();
router.post('/times', timeController.create);
router.get('/times', timeController.findAll);
exports.default = router;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const router = (0, express_1.Router)();
const usersControllers = new users_controller_1.default();
const userSlashId = '/users/:id';
router.get('/users', usersControllers.getAll);
router.get(userSlashId, usersControllers.getById);
router.post('/users', usersControllers.create);
router.put(userSlashId, usersControllers.update);
router.delete(userSlashId, usersControllers.remove);
exports.default = router;

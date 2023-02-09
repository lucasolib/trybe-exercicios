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
const connection_1 = __importDefault(require("../models/connection"));
const user_model_1 = __importDefault(require("../models/user.model"));
const restify_errors_1 = require("restify-errors");
// const properties = ['title', 'price', 'author', 'isbn'];
class UserService {
    constructor() {
        this.model = new user_model_1.default(connection_1.default);
    }
    // static validateProperties(User: User): [boolean, string | null] {
    //   for (let i = 0; i < properties.length; i += 1) {
    //     if (!Object.prototype.hasOwnProperty.call(User, properties[i])) {
    //       return [false, properties[i]];
    //     }
    //   }
    //   return [true, null];
    // }
    // static validateValues(User: User): [boolean, string | null] {
    //   const entries = Object.entries(User);
    //   for (let i = 0; i < entries.length; i += 1) {
    //     const [property, value] = entries[i];
    //     if (!value) {
    //       return [false, property];
    //     }
    //   }
    //   return [true, null];
    // }
    // static validationBook(book: Book): void | string {
    //   let [valid, property] = BookService.validateProperties(book);
    //   if (!valid){
    //     return `O campo ${property} é obrigatório.`;
    //   }
    //   [valid, property] = BookService.validateValues(book);
    //   if (!valid) {
    //     return `O campo ${property} não pode ser nulo ou vazio.`;
    //   }
    // }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getAll();
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.getById(id);
            return user;
        });
    }
    create(user) {
        // const isValidBook = BookService.validationBook(book);
        // if (typeof isValidBook === 'string') {
        // throw new BadRequestError(isValidBook);
        // }
        return this.model.create(user);
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            // vamos utilizar a mesma validação do método create
            // const isValidBook = BookService.validationBook(book);
            // if (typeof isValidBook === 'string') {
            // throw new BadRequestError(isValidBook);
            // }
            const userFound = yield this.model.getById(id);
            if (!userFound) {
                throw new restify_errors_1.NotFoundError('User not found!');
            }
            return this.model.update(id, user);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.model.getById(id);
            if (!userFound) {
                throw new restify_errors_1.NotFoundError('User not found!');
            }
            this.model.remove(id);
        });
    }
}
exports.default = UserService;

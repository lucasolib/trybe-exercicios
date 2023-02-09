import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import { BadRequestError, NotFoundError } from 'restify-errors';

// const properties = ['title', 'price', 'author', 'isbn'];

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
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
  
  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }

  public create(user: User): Promise<User> {
    // const isValidBook = BookService.validationBook(book);
    // if (typeof isValidBook === 'string') {
      // throw new BadRequestError(isValidBook);
    // }
    return this.model.create(user);
  }

  public async update(id: number, user: User): Promise<void> {
    // vamos utilizar a mesma validação do método create
    // const isValidBook = BookService.validationBook(book);
    // if (typeof isValidBook === 'string') {
      // throw new BadRequestError(isValidBook);
    // }
    const userFound = await this.model.getById(id);

    if (!userFound) {
      throw new NotFoundError('User not found!');
    }

    return this.model.update(id, user);
  }

  public async remove(id: number): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('User not found!');
    }

    this.model.remove(id);
  }
}

export default UserService;
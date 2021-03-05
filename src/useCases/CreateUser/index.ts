import MailtrapMailProvider from '../../providers/implementations/MailtrapMailProvider';
import PostgresUserRepository from '../../repositories/implementations/PostgresUserRepository';
import CreateUserController from './CreateUserController';
import CreateUserUseCase from './CreateUserUseCase';

const mailtrapProvider = new MailtrapMailProvider();
const postrgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(
  postrgresUserRepository,
  mailtrapProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export { createUserUseCase, createUserController };

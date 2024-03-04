import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Company } from 'src/database/model/company.model';
import { User } from '../database/model/user.model'; // Ensure the path is correct

export const sequelizeOptions: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'maddy',
  database: 'postgres',
  models: [User,Company],
  // sync:{ logging: console.log, force: true }
};
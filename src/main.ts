import { NestFactory } from '@nestjs/core';
import { Sequelize } from 'sequelize-typescript';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sequelize = app.get(Sequelize);
  await sequelize.sync({ logging: console.log, force: true });
  await app.listen(8000);
}
bootstrap();

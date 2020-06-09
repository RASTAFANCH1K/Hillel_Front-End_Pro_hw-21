// EXERCISE-1:
// 1) создать проект,
// 2) добавить обьект константу const allUsers = [ { id: 32, name: '1'},{ id: 33, name: '2'}, { id: 34, name: '3'}];
// 3)добавить один модуль и туда роут который будет сответствовать такому адресу GET /users/(число 32- 34), 
// вытаскивать это число и возвращать юзера по id
// брать число
// 4) добавить еще роут POST /users/add , пример Body { id: 36, name '36'}, и пошит это бади в allUsers
// 5) добавить еще роут Get /users?from=(любое число которое соответсвует id с allUsers )&to=(аналогично), и 
// возвращаем рендж юзеров по from, to
// SOLUTION:

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000, () => console.log('Server is listening on port 3000'));
}
bootstrap();

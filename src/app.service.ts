import { Injectable, BadRequestException } from '@nestjs/common';
import { IUsers } from './app.interfaces';
import { AdressDoesntExist, UserIdDoesntExist } from './app.errors';

//////////////////////////////////////////////////
const allUsers = [
  { id: 32, name: '1' },
  { id: 33, name: '2' }, 
  { id: 34, name: '3' }
];

const errors = [ AdressDoesntExist, UserIdDoesntExist ];
//////////////////////////////////////////////////

@Injectable()
export class AppService {
  getAllUsers(): IUsers[] {
    return allUsers;
  }

  // Тут решил поэксперементировать с кастомными ошибками, походу шляпа какая-то)
  getUserById(id: number): IUsers {
    try {
      const userId = allUsers.find(el => el.id == id);
      if (!userId) throw new UserIdDoesntExist(id);
      return userId;
    } catch (err) {
      const foundError = errors.some(error => err instanceof error);
      if (foundError) throw new BadRequestException(err.message);
      throw new BadRequestException('Uknown error');
    }
  }

  addUser(object: IUsers): IUsers[] {
    allUsers.push(object);
    return allUsers;
  }

  findRangeOfUsers(from: number, to: number): IUsers[]  {
    return allUsers.filter(user => user.id >= from && user.id <= to);
  }
}

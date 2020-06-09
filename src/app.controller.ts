import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IUsers, IQueryParams } from './app.interfaces';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all') // http://localhost:3000/users/all
  getAllUsers(): IUsers[] {
    return this.appService.getAllUsers();
  }

  @Get(':id') // http://localhost:3000/users/32
  getUserById(@Param('id') userId: number): IUsers {
    return this.appService.getUserById(userId);
  }

  @Post('addUser')
  addUser(@Body() user: IUsers): IUsers[] {
    return this.appService.addUser(user);
  }

  // async function postData(url = '', data = {}) {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   return await response.json();
  // }

  // postData('http://localhost:3000/users/addUser', { id: 36, name: '36' })
  // .then((data) => {
  //   console.log(data);
  // });

  @Get('') // http://localhost:3000/users?from=33&to=34
  findRangeOfUsers(@Query() params: IQueryParams): IUsers[] {
    return this.appService.findRangeOfUsers(params.from, params.to);
  }
}
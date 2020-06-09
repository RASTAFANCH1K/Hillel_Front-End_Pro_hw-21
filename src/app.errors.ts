export class AdressDoesntExist extends Error {
  constructor() {
    super('Following adress does not exist');
  }
}

export class UserIdDoesntExist extends Error {
  constructor(id: number) {
    super(`User with following id (${id}) does not exist`);
  }
}
import { BadRequestException, Injectable } from '@nestjs/common';
import { users } from '../../../moks';

@Injectable()
export class AllUsersService {
  getUsers() {
    return users;
  }
  addUser(newUser) {
    const existingUser = users.find((user) => user.email === newUser.email);
    if (existingUser) {
      throw new BadRequestException({
        message: 'User with this email already exists',
      });
    }

    const newId = (users.length + 1).toString();
    newUser._id = newId;
    newUser.index = users.length;

    users.push(newUser);

    return newUser;
  }

  remove(id: string) {
    const userIndex = users.findIndex((users) => users._id === id);

    if (userIndex === -1) {
      throw new BadRequestException({ message: 'No such user exists' });
    }

    const removedUser = users.splice(userIndex, 1);

    return removedUser;
  }
}

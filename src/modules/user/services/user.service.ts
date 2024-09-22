import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  firstUser() {
    return {
      _id: '66e6f7287dffee60214cd035',
      index: 0,
      guid: '4c1a844d-03ab-420d-be19-15285619cdaf',
      picture: 'http://placehold.it/32x32',
      age: 15,
      name: 'Sharipova Robiya',
      email: 'Sharipova_Robiya@bristo.com',
      phone: '+1 (922) 566-3413',
    };
  }
}

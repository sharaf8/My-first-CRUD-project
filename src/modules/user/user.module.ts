import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { AllUsersService } from './services/allUsers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/User.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [AllUsersService, UserService],
})
export class UserModule {}

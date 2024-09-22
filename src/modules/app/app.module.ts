import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeModule } from '../type/type.module';
import { SortingModule } from '../sorting/sorting.module';
import { ArithmeticsModule } from '../arithmetics/arithmetics.module';
import { UserModule } from '../user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configurations from '../../configurations';
import { NewsModule } from '../news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    NewsModule,
    TypeModule,
    SortingModule,
    ArithmeticsModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.getOrThrow('DB_HOST'),
        port: config.get('DB_PORT'),
        user: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        synchronize: true,
        autoprefixer: true,
        models: [],
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

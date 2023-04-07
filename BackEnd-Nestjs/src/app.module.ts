import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: `.env.${process.env.NODE_ENV}`
    // }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       type: 'sqlite',
    //       database: 'db.sqlite,
    //       synchronize: true,
    //       entities: [User, Report]
    //     }
    //   }
    // }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true
    }),
    JwtModule.register({
      secret: 'super-secret-cat', // set a secret key for JWT encryption
      signOptions: { expiresIn: '1h' }, // set expiration time for JWT token
    }),
    UsersModule,
    ReportsModule
  ],
  controllers: [AppController],
  providers: [AppService
  ],
  exports: [JwtModule]
})
export class AppModule {
  // constructor(
  //   private configService: ConfigService
  // ) { }
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(
  //       cookieSession({
  //         keys: [this.configService.get('COOKIE_KEY')],
  //       }),
  //     )
  //     .forRoutes('*');
  // }
}

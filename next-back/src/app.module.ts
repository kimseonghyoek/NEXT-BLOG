import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { App } from './app';
import { AuthController } from './auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: 'sad123',
      host: 'localhost',
      port: 3308,
      database: 'NEXTB',
    }),
    MoviesModule,
  ],
  controllers: [AppController, AuthController],
  providers: [App],
})
export class AppModule {}

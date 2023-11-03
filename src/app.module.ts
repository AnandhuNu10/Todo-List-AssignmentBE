import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, UsersModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

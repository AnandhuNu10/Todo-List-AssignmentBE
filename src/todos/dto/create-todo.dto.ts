import { IsArray, IsString, ValidateNested } from 'class-validator';
import { Todo } from '../entities/todo.entity';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {

  @ApiProperty({
    description: 'give an array',
    example: ['Go somewhere'],
  })
  @IsArray()
  @IsString({ each: true })
  todos: string[];
}

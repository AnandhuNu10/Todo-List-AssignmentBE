import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'give username',
    example: 'anandhu123',
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'give password',
    example: 'anandhu',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'give email',
    example: 'anandhu123@mail.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'give role',
    example: 'Admin',
  })
  @IsString()
  role: string;
}

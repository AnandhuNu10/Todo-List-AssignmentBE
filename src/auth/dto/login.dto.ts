import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateLoginDto {

  @ApiProperty({
    description: 'give username',
    example: 'Anandhu',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'give password',
    example: 'pass123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
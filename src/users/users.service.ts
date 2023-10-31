import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findUserById(id: number) {
    console.log('r', id);
    return await this.userRepository.findOne({ where: { id: id} });
  }

  async create(createUserDto: CreateUserDto) {
    let user: User = new User();
    user.email = createUserDto.email; 
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.role = 'user';

    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}

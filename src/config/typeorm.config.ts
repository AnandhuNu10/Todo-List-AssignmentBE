import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeOrmConfig:TypeOrmModuleOptions=
{
    type: 'postgres',
    host: 'nivapay-dev.cb5hwvdvchhy.ap-south-1.rds.amazonaws.com',
    port: 5432,
    username: 'read_write_user',
    password: '96;L2Gp3/a',
    database: 'Aanandhu_dev',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: false,
    
  }         
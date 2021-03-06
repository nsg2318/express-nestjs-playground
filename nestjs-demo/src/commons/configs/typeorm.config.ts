
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Cat } from '../../cats/cats.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'sunba',
  entities: [Cat], // 사용할 entity의 클래스명을 넣어둔다.
  synchronize: true, // false로 해두는 게 안전하다.
};
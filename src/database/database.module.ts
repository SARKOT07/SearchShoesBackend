import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoesORM } from '../shoes/infrastructure/persistence/Shoes.orm';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'bdShoes.sqlite',
        entities: [ShoesORM],
        synchronize: true,
      }),
    ],
    controllers: [],
    providers: [],
  })
  export class DbconectionModule {}
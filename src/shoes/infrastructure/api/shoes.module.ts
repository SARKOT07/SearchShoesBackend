import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchAll } from '../../../shoes/application/services/searchAll.service';
import { SearchBrand } from '../../../shoes/application/services/searchBrand.service';
import { SearchModel } from '../../../shoes/application/services/searchModel.service';
import { SearchReleaseDate } from '../../../shoes/application/services/searchReleaseDate.service';
import { SearchStore } from '../../../shoes/application/services/searchStore.service';
import { RepositoryShoes } from '../adapters/shoes.repository';
import { ShoesORM } from '../persistence/Shoes.orm';
import { ShoesController } from './shoes.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ShoesORM]),
      ],
    controllers: [ShoesController],
    providers: [
      SearchAll,
      RepositoryShoes,
      SearchBrand,
      SearchModel,
      SearchReleaseDate,
      SearchStore,
    ],
})
export class ShoesModule {
    static register(): DynamicModule {
        return {
            module: ShoesModule,
            providers: [
              {
                inject: [RepositoryShoes],
                provide: SearchAll,
                useFactory: (userRepo: RepositoryShoes) =>
                  new SearchAll(userRepo),
              },
              {
                inject: [RepositoryShoes],
                provide: SearchBrand,
                useFactory: (userRepo: RepositoryShoes) =>
                  new SearchBrand(userRepo),
              },
              {
                inject: [RepositoryShoes],
                provide: SearchModel,
                useFactory: (userRepo: RepositoryShoes) =>
                  new SearchModel(userRepo),
              },
              {
                inject: [RepositoryShoes],
                provide: SearchReleaseDate,
                useFactory: (userRepo: RepositoryShoes) =>
                  new SearchReleaseDate(userRepo),
              },
              {
                inject: [RepositoryShoes],
                provide: SearchStore,
                useFactory: (userRepo: RepositoryShoes) =>
                  new SearchStore(userRepo),
              },
            ],
          };

    }
}

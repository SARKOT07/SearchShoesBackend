import {
    Controller,
    Get,
    Inject,
    Query,
  } from '@nestjs/common';
import { SearchAll } from '../../../shoes/application/services/searchAll.service';
import { SearchBrand } from '../../../shoes/application/services/searchBrand.service';
import { SearchModel } from '../../../shoes/application/services/searchModel.service';
import { SearchReleaseDate } from '../../../shoes/application/services/searchReleaseDate.service';
import { SearchStore } from '../../../shoes/application/services/searchStore.service';

  @Controller('api/shoes')
export class ShoesController {
  constructor(
    @Inject(SearchAll)
    private readonly searchAll: SearchAll, 
    @Inject(SearchBrand)
    private readonly searchBrand: SearchBrand,
    @Inject(SearchModel)
    private readonly searchModel: SearchModel,
    @Inject(SearchReleaseDate)
    private readonly searchReleaseDate: SearchReleaseDate,
    @Inject(SearchStore)
    private readonly searchStore: SearchStore,
  ) {}

  //http://localhost:3000/api/shoes/filter/all
  @Get('filter/all') 
  async getAll() {
    const shoes = await this.searchAll.execute();
    return shoes;
  }

  //http://localhost:3000/api/shoes/filter/brand?brand=adidas
  //brand:(Nike, Adidas y Crocs)
  @Get('filter/brand')
  async getByBrand(@Query('brand') brand: string) {
    const shoes = await this.searchBrand.execute(brand);
    return shoes;
  }

  //http://localhost:3000/api/shoes/filter/model?model=venture runner
  //model:(ADILETTE AQUA SLIDES, ACLASSIC HEMP LEAF CLOG, SUPERSTAR SHOES y Venture Runner)
  @Get('filter/model')
  async getByModel(@Query('model') model: string) {
    const shoes = await this.searchModel.execute(model);
    return shoes;
  }

  //http://localhost:3000/api/shoes/filter/releaseDate?date=2022-09-12
  @Get('filter/releaseDate')
  async getByReleaseDate(@Query('date') date: string) {
    const shoes = await this.searchReleaseDate.execute(date);
    return shoes;
  }

  //http://localhost:3000/api/shoes/filter/store?store=nikeStore
  //store name:(NikeStore, AdidasStore y CrocsStore)
  @Get('filter/store')
  async getByStores(@Query('store') store: string) {
    const shoes = await this.searchStore.execute(store);
    return shoes;
  }

}

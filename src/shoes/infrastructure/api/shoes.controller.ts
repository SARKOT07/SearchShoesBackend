import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Put,
    Query,
    UseGuards,
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
  
  @Get('filter/all')
  async getAll() {
    const shoes = await this.searchAll.execute();
    return shoes;
  }

  @Get('filter/brand')
  async getByBrand(@Query('brand') brand: string) {
    const shoes = await this.searchBrand.execute(brand);
    return shoes;
  }

  @Get('filter/model')
  async getByModel(@Query('model') model: string) {
    const shoes = await this.searchModel.execute(model);
    return shoes;
  }

  @Get('filter/releaseDate')
  async getByReleaseDate(@Query('date') date: string) {
    const shoes = await this.searchReleaseDate.execute(date);
    return shoes;
  }

  @Get('filter/store')
  async getByStores(@Query('store') store: string) {
    const shoes = await this.searchStore.execute(store);
    return shoes;
  }

}
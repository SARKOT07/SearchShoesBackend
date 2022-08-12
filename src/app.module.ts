import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoesORM } from './shoes/infrastructure/persistence/Shoes.orm';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import { ShoesModule } from './shoes/infrastructure/api/shoes.module';
import { DbconectionModule } from './database/database.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ShoesORM,
    ]),
    DbconectionModule,
    ConfigModule,
    ShoesModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get('PORT');
  }
}

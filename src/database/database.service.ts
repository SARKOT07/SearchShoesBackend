import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'tls';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'postgres',
        host: config.get('POSTGRES_HOST'),
        port: Number(config.get('POSTGRES_PORT')),
        username: config.get('POSTGRES_USER'),
        password: config.get('POSTGRES_PASSWORD'),
        database: config.get('POSTGRES_DATABASE'),
        ssl:
          process.env.NODE_ENV === 'production'
            ? { rejectUnauthorized: false }
            : false,
        autoLoadEntities: true,
        synchronize: true,
        retryDelay: 3000,
        retryAttempts: 10,
      } as ConnectionOptions;
    },
  }),
];

const config = new ConfigService();

export const Data = new DataSource({
  type: 'postgres',
  host: config.get('POSTGRES_HOST'),
  port: parseInt(<string>config.get('POSTGRES_PORT')),
  username: config.get('POSTGRES_USER'),
  password: config.get('POSTGRES_PASSWORD'),
  database: config.get('POSTGRES_DATABASE'),
});

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IRepositoryShoes } from "../../../shoes/application/ports/IRepositoryShoes";
import { Repository } from "typeorm";
import { ShoesORM } from "../persistence/Shoes.orm";



@Injectable()
export class RepositoryShoes implements IRepositoryShoes {
//Adaptador con typeORM que implementa el puerto de la capa de aplicacion (interfaz de IRepository Shoes)
  constructor(
    @InjectRepository(ShoesORM)
    private readonly _shoesRepository: Repository<ShoesORM>,
  ) {}

    async getAllShoes() {
        const shoes = await this._shoesRepository.find();
        return shoes;
    }

    async getByStoreShoes(store: string) {

        const shoes = await this._shoesRepository
            .createQueryBuilder('shoes')
            .where("(shoes.store_name) like :store_name", {
                store_name: `%${store}%`,
            })
            .getMany();
  
        return shoes;
    }

    async getByModelShoes(model: string) {
        
        const shoes = await this._shoesRepository
        .createQueryBuilder('shoes')
        .where("(shoes.model) like :model", {
            model: `%${model}%`,
        })
        .getMany();

        return shoes;
    }

    async getByBrandShoes(brand: string) {
        
        const shoes = await this._shoesRepository
        .createQueryBuilder('shoes')
        .where("(shoes.brand) like :brand", {
            brand: `%${brand}%`,
        })
        .getMany();

        return shoes;
    }

    async getByReleaseDateShoes(releaseDate: string) {
        const shoes = await this._shoesRepository
        .createQueryBuilder('shoes')
        .where('shoes.release_date = :release_date', {
            release_date: releaseDate,
          })
        .getMany();

        return shoes;
    }

}
 
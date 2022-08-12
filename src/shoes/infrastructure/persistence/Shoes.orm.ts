import {Entity, PrimaryColumn, Column} from 'typeorm'; 

@Entity({name: 'shoes'})
export class ShoesORM{

    @PrimaryColumn({name: 'id_shoes', type: 'varchar'})
    id_shoes: string;

    @Column({name: 'brand', type: 'varchar'})
    brand: string;

    @Column({name: 'model', type: 'varchar'})
    model: string;

    @Column({name: 'price', type: 'decimal'})
    price: number;

    @Column({name: 'store_name', type: 'varchar'})
    store_name: string; 

    @Column({name: 'store_address', type: 'varchar'})
    store_address: string;

    @Column({name: 'release_date'})
    release_date: Date;

    @Column({name: 'imagen', type: 'varchar'})
    imagen: string;
}
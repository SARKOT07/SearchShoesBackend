import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchStore
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute(data: string) {
        //Servicio donde consume por injection de dependencias la interfaz del repositorio de los shoes
        //Servicio que busca los zapatos por nombre de la tienda donde se vende
        const shoes = await this.repositoryShoes.getByStoreShoes(data);

        return shoes;

}
}
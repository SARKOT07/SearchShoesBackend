import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchBrand 
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute(data: string) {
        //Servicio donde consume por injection de dependencias la interfaz del repositorio de los shoes
        //Servicio que busca los zapatos por marca
        const shoes = await this.repositoryShoes.getByBrandShoes(data);

        return shoes;

}
}
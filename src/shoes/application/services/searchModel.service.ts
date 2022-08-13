import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchModel
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute(data: string) {
        //Servicio donde consume por injection de dependencias la interfaz del repositorio de los shoes
        //Servicio que busca los zapatos por modelo
        const shoes = await this.repositoryShoes.getByModelShoes(data);

        return shoes;

}
}
import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchAll 
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute() {
            //Servicio donde consume por injection de dependencias la interfaz del repositorio de los shoes
            //Servicio que busca todo los zapatos
            const shoes = await this.repositoryShoes.getAllShoes();

            return shoes;

    }
}
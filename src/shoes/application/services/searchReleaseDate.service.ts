import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchReleaseDate
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute(data: string) {
        //Servicio donde consume por injection de dependencias la interfaz del repositorio de los shoes
        //Servicio que busca los zapatos por la fecha de lanzamiento
        const shoes = await this.repositoryShoes.getByReleaseDateShoes(data);

        return shoes;

}
}
import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchAll 
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute() {

            const shoes = await this.repositoryShoes.getAllShoes();

            return shoes;

    }
}
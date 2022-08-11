import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchModel
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute(data: string) {

        const shoes = await this.repositoryShoes.getByModelShoes(data);

        return shoes;

}
}
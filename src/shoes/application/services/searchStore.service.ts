import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchStore
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute(data: string) {

        const shoes = await this.repositoryShoes.getByStoreShoes(data);

        return shoes;

}
}
import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchBrand 
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute(data: string) {

        const shoes = await this.repositoryShoes.getByBrandShoes(data);

        return shoes;

}
}
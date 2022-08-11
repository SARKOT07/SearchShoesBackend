import { IRepositoryShoes } from "../ports/IRepositoryShoes";


export class SearchReleaseDate
{
    public constructor(
        private readonly repositoryShoes: IRepositoryShoes,
    ) {}

    async execute(data: string) {

        const shoes = await this.repositoryShoes.getByReleaseDateShoes(data);

        return shoes;

}
}
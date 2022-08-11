export interface IRepositoryShoes {
    
    //querys
    getAllShoes();
  
    getByStoreShoes(store: string);
  
    getByModelShoes(model: string);
  
    getByBrandShoes(brand: string);
  
    getByReleaseDateShoes(releaseDate: string);
    
  }
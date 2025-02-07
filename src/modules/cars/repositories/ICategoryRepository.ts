import { Category } from "../entities/category"

//DTO - data transfer object: serve para transferir dados de uma class para outra
interface ICreateCategoryDTO{
  name : string;
  description: string;
}


interface ICategoryRepository{
  findByName(name:string): Promise<Category>
  list(): Promise<Category[]>
  create({name, description}: ICreateCategoryDTO): void
}

export {ICategoryRepository, ICreateCategoryDTO}
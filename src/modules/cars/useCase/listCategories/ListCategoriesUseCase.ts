import { Category } from "../../entities/category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";



class ListCategoriesUseCase{

  constructor(private categoriesRepository: ICategoryRepository){}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
  
    return categories
  }
}

export {ListCategoriesUseCase}
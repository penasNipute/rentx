import { Repository } from "typeorm";
import { Category } from "../../entities/category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";
import { AppDataSource } from "../../../../data-source";



class CategoriesRepository  implements ICategoryRepository {
  
  private repository: Repository<Category>


  constructor(){
    this.repository = AppDataSource.getRepository(Category)
  }


  async create({name, description} : ICreateCategoryDTO): Promise<void>{
    
    const category= this.repository.create({name, description})

    await this.repository.save(category)
  }

  async list() : Promise<Category[]> {
    const category = await this.repository.find()
    return category
  }

  async findByName(name:string): Promise<Category>{
    const category = await this.repository.findOne({where: {name}})

    return category
  }

}

export {CategoriesRepository}
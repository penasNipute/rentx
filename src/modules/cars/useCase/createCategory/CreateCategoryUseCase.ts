import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest{
  name:string;
  description:string;
}

/*
*[x] - definir o retorno
*[x] - alterar o retorno de erro
*[x] - acessar o repository
*[x] - retornar algo //neste caso nao 'e necessario pos 'e void
*/

class CreateCategoryUseCase{

  constructor(private categoriesRepository: ICategoryRepository){}
  
  async execute({name, description}: IRequest):Promise<void>{
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)


  if(categoryAlreadyExists){
    throw new Error('Category already exists!')
  }

  this.categoriesRepository.create({name, description})
  }
}

export { CreateCategoryUseCase }
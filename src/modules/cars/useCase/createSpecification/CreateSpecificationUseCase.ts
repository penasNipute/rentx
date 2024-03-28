import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest{
  name:string;
  description:string;
}

class CreateSpecificationUseCase{
  constructor(private SpacificationRepository: ISpecificationRepository){}

  execute({name, description}: IRequest): void{

    const specificationAlreadyExists = this.SpacificationRepository.findByName(name)

    if(specificationAlreadyExists){
      throw new Error('Specification already exists')
    }

    this.SpacificationRepository.create({
      name, 
      description
    })
  }

}

export { CreateSpecificationUseCase }
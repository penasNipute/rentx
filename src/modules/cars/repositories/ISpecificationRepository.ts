import { Specification } from "../entities/Specification";


interface ICreateSpecificatinDTO{
  name:string;
  description:string;
}

interface ISpecificationRepository{

  create({ name, description }:ICreateSpecificatinDTO): void
  findByName(name:string):Specification
}  

export { ISpecificationRepository, ICreateSpecificatinDTO }
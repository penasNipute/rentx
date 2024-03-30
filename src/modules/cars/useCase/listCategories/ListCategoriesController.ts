import { Request, Response } from "express";
import { Category } from "../../entities/category";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";




class ListCategoriesController{

  constructor( private listCategoriesUseCase: ListCategoriesUseCase){}

  async handle(req:Request, res:Response): Response {
    
    const all = await this.listCategoriesUseCase.execute()
    
    return res.status(200).json(all)
  }
}

export {ListCategoriesController}
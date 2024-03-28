import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";




class CreateCategoryController{

  constructor(private createCategoreUseCase: CreateCategoryUseCase){}

  handle(req: Request, res: Response): Response{
    const { name, description } = req.body
  
    this.createCategoreUseCase.execute({name, description})
  
    return res.status(201).json({message:'Repository created'})

  }

}

export {CreateCategoryController}
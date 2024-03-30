import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";




class CreateCategoryController{

  constructor(private createCategoreUseCase: CreateCategoryUseCase){}

  
  async handle(req: Request, res: Response): Promise<Response>{
    try {
      const { name, description } = req.body
  
      await this.createCategoreUseCase.execute({name, description})
    
      return res.status(201).json({message:'Repository created'})
    } catch (error) {
      return res.status(500).json(error.message);
    }
    

  }

}

export {CreateCategoryController}
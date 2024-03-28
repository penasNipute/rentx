import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";



class ImportCategoryController{

  constructor(private importCategoryUseCase: ImportCategoryUseCase){}

  handle(req:Request, res:Response):Response{
    const { file } = req

    if(!file){
      throw new Error('Ficheiro nao recebido')
    }

    this.importCategoryUseCase.execute(file)

    return res.send()
  }

}

export { ImportCategoryController }
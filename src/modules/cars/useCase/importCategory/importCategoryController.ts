import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";



class ImportCategoryController{

  constructor(private importCategoryUseCase: ImportCategoryUseCase){}

  async handle(req:Request, res:Response):Promise<Response>{
    const { file } = req

    if(!file){
      throw new Error('Ficheiro nao recebido')
    }

    await this.importCategoryUseCase.execute(file)

    return res.send()
  }

}

export { ImportCategoryController }
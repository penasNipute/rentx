import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

export default ():ImportCategoryController => {
  const categoreisRepository = new CategoriesRepository()
  const importCategoryUseCase = new ImportCategoryUseCase(categoreisRepository)
  const importCategoryController = new ImportCategoryController(importCategoryUseCase)

  return importCategoryController 
}

import fs from 'fs'
import csvParse from "csv-parser"
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

interface IImportCategory{
  name:string;
  description:string;
}

class ImportCategoryUseCase{
  constructor(private categoryRepository:CategoriesRepository){}

  loadCategories(file: Express.Multer.File){
   return new Promise((resolve,reject)=>{

    const stream = fs.createReadStream(file.path)
    const categories: IImportCategory[] = []

    const parseFile = csvParse()

    stream.pipe(parseFile)

    parseFile
      .on("data", async (line:any) =>{ 
        const values:string[] = Object.values(line)
        values.forEach(el => {
          const linha = el.split(',');

          const [name, description] = linha

          categories.push({
            name,
            description
          })
      
        });
      }).on('end', ()=>{
        fs.promises.unlink(file.path)
        resolve(categories)
      }).on('error', (err) =>{
        reject(err)
      })

   })

  }

  async execute(file: Express.Multer.File): Promise<void>{
    const categories = await this.loadCategories(file)
     
    categories.map( category =>{
      const { name, description } = category

      const existsCategory = this.categoryRepository.findByName(name)
 
      if(!existsCategory){
        this.categoryRepository.create({
          name,
          description
        })
      }
    } )
  } 
}

export { ImportCategoryUseCase }
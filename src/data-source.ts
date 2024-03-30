import { DataSource } from "typeorm"
import { Category } from "./modules/cars/entities/category"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "93penaswild",
    database: "rentx", 
    migrations:["./src/database/migrations/*.ts"],
    entities:[Category]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
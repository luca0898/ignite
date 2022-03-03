import fs from "fs"
import { parse as csvParse } from "csv-parse"
import { ICategoryRepository } from "../../repositories/ICategoryRepository"

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] = []
            const parseFile = csvParse()

            stream.pipe(parseFile)

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line

                    categories.push({
                        name,
                        description
                    })
                })
                .on("end", () => {
                    fs.promises.unlink(file.path)
                    resolve(categories)
                })
                .on("error", reject)

        })
    }

    async execute(file: Express.Multer.File) {
        const categories = await this.loadCategories(file);

        categories.map(async ({ name, description }) => {
            const existingCategory = this.categoryRepository.findByName(name)

            if (!existingCategory) {
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export { ImportCategoryUseCase }
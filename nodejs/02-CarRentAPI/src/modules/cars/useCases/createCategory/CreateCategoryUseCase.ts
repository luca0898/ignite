import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

interface IResponse {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute({ name, description }: IRequest): IResponse {
        const existingCategory = this.categoryRepository.findByName(name);

        if (existingCategory) {
            throw new Error("Category already exists!");
        }

        this.categoryRepository.create({ name, description });

        return {
            name,
            description,
        };
    }
}

export { CreateCategoryUseCase };

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

interface IResponse {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private repository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): IResponse {
        const existingSpecification = this.repository.findByName(name);

        if (existingSpecification) {
            throw new Error("Specification already exists!");
        }

        this.repository.create({ name, description });

        return {
            name,
            description,
        };
    }
}

export { CreateSpecificationUseCase };

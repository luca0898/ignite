import Specification from "../models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create(entity: ICreateSpecificationDTO): Specification;
    list(): Specification[];
    findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationRepository };

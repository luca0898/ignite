import Category from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create(entity: ICreateCategoryDTO): Category;
    list(): Category[];
    findByName(name: string): Category;
}

export { ICreateCategoryDTO, ICategoryRepository };

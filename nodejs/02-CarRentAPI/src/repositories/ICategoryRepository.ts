import Category from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create(category: ICreateCategoryDTO): Category;
    list(): Category[];
    findByName(name: string): Category;
}

export { ICreateCategoryDTO, ICategoryRepository };

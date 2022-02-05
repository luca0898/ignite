import Category from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): Category {
        const entity = new Category();

        Object.assign(entity, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(entity);

        return entity;
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find((entity) => entity.name === name);
    }
}

export { CategoryRepository };

import Category from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): Category {
        const category: Category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);

        return category;
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }
}

export { CategoryRepository };

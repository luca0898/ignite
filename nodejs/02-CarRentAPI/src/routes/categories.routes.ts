import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryRepository = new CreateCategoryService(
        categoryRepository
    );

    createCategoryRepository.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (_, response) => {
    const allCategories = categoryRepository.list();

    return response.json(allCategories);
});

export { categoriesRoutes };

import { Router } from "express";

import {
    categoryRepository,
    createCategoryController,
} from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (_, response) => {
    const allCategories = categoryRepository.list();

    return response.json(allCategories);
});

export { categoriesRoutes };

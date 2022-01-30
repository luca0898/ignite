import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    categoryRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (_, response) => {
    const all = categoryRepository.list();

    return response.status(201).json(all);
});

export { categoriesRoutes };

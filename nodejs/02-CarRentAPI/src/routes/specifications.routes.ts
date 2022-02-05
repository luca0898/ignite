import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const repository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
        repository
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

specificationRoutes.get("/", (_, response) => {
    const allSpecifications = repository.list();

    return response.json(allSpecifications);
});

export { specificationRoutes };

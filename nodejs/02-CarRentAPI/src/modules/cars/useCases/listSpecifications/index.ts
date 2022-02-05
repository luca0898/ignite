import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const repository = SpecificationRepository.getInstance();
const useCase = new ListSpecificationsUseCase(repository);
const controller = new ListSpecificationsController(useCase);

export { controller as listSpecificationsController };

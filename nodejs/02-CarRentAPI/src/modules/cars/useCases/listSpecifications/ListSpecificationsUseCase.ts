import Specification from "../../models/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationsUseCase {
    constructor(private repository: ISpecificationRepository) {}

    execute(): Specification[] {
        return this.repository.list();
    }
}

export { ListSpecificationsUseCase };

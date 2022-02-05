import Specification from "../../models/Specification";
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationRepository;

    constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): Specification {
        const entity = new Specification();

        Object.assign(entity, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(entity);

        return entity;
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        return this.specifications.find((entity) => entity.name === name);
    }
}

export { SpecificationRepository };

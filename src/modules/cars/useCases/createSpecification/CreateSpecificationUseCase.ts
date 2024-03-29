import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExistis =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExistis) {
      throw new Error("Specification already exists");
    }

    this.specificationsRepository.create({ name, description });
  }
}

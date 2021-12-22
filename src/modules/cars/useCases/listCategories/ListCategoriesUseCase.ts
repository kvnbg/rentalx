import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private listCategoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.listCategoriesRepository.list();
  }
}

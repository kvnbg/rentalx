import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsReposistory = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationsService = new CreateSpecificationService(
    specificationsReposistory
  );

  createSpecificationsService.execute({ name, description });

  return res.status(201).send();
});

export { specificationsRoutes };
import { Router } from "express";
import vehicleController from "../controllers/vihicleController";

const router = Router();

router.get("/", vehicleController.create);

export default router;

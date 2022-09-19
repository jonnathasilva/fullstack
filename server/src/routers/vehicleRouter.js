import { Router } from "express";
import vehicleController from "../controllers/vihicleController";

const router = Router();

router.get("/veiculos", vehicleController.getVehicles);
router.post("/veiculos/find", vehicleController.getSearch);
router.get("/veiculos/:id", vehicleController.VehiclesMyId);
router.post("/veiculos", vehicleController.createVehicle);
router.put("/veiculos/:id", vehicleController.putVehicle);
router.patch("/veiculos/:id", vehicleController.patchVehicle);
router.delete("/veiculos/:id", vehicleController.deleteVehicle);

export default router;

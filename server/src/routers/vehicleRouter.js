import { Router } from "express";
import vehicleController from "../controllers/vihicleController";

const router = Router();

router.get("/veiculos", vehicleController.getVehicles);
router.get("/veiculos/:id", vehicleController.VehiclesMyId);
router.get("/veiculos/find/:q", vehicleController.getSearch);
router.post("/veiculos", vehicleController.createVehicle);
router.put("/veiculos/:id", vehicleController.putVehicle);
router.patch("/veiculos/:id", vehicleController.patchVehicle);
router.delete("/veiculos/:id", vehicleController.deleteVehicle);

export default router;

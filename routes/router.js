import { Router } from "express";
import sensorRoutes from "./sensorRoutes.js"


const router = Router();
router.use("/", sensorRoutes)

router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada",
  })
})


export default router
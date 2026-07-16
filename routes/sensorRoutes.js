import { Router } from "express"
import sensorController from "../containers/sensorContainer.js"

const sensorRoutes = Router()

sensorRoutes.get("/sensores", sensorController.getSensores)
sensorRoutes.post("/lecturas", sensorController.setSensor)


export default sensorRoutes
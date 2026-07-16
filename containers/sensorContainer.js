import SensorController from "../controllers/SensorController.js"
import SensorService from "../services/SensorService.js"
import {Sensor} from "../Models/index.js"

const sensorService = new SensorService(Sensor)
const sensorController = new SensorController(sensorService)

export default sensorController;

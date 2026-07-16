import { time } from "node:console"
import { Model, where } from "sequelize"
import validar from "../utils/validar.js"

class SensorService {

    constructor(sensor){
        this.sensor = sensor
    }

    setSensor =  async ({ id, tipo, valor }) => {
        const timestamp = new Date().toISOString()
        const valorNumerico = Number(valor)
        
        if (!validar.validarTipo(tipo)) throw new Error("Tipo invalido")
        if (!validar.validarValor(valorNumerico)) throw new Error("Valor invalido")

        let sensor = await this.sensor.findOne({
            where: {id}
        })

        if (sensor){
            await sensor.update({tipo, valor, timestamp})
        } else {
            sensor = await this.sensor.create({ id, tipo, valor, timestamp })
        }

        return sensor
    }

    getSensores = async () => {
        const sensores = await this.sensor.findAll()

        if (!sensores) throw new Error("No se encontraron sensores")

        return sensores
    }



}

export default SensorService
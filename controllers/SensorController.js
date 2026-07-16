class SensorController {
    constructor(service) {
        this.sensorService = service
    }
    
    setSensor = async (req, res) => {
        try {
            const {id, tipo, valor} = req.body
            if (!id || !tipo || !valor) throw new Error("Complete los campos id, tipo y valor")

            const sensor = await this.sensorService.setSensor({id, tipo, valor})

            res.status(201).send({succes: true, message: sensor})
        } catch (error) {
            res.status(400).send({succes: false, errorMsg: error.message})
        }
            
    }

    getSensores = async (req, res) => {
        try {
            const sensor = await this.sensorService.getSensores()

            res.status(200).send({succes: true, message: sensor})
        } catch (error) {
            res.status(400).send({succes: false, errorMsg: error.message})
        }
    }


}

export default SensorController
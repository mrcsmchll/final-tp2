import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

import bcrypt from "bcrypt";

class Sensor extends Model {
  static validarId(id) {
    return /^[A-Za-z0-9]{8}$/.test(id);
  }
}

Sensor.init(
  {
    id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
      validate:{
          isValidId(value) {
          if (!Sensor.validarId(value)) {
            throw new Error("El id debe ser alfanumérico de 8 caracteres");
          }
        }
      },
      primaryKey: true
    },

    tipo: {
      type: DataTypes.ENUM("TEMPERATURA", "HUMEDAD", "CO2"),
      allowNull: false
    },

    valor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      validate: {

      },
    },

    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    alerta: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },

  {
    sequelize,
    modelName: "Sensor",
    timestamps: false
  },
)

Sensor.beforeCreate(async(sensor)=>{
    sensor.timestamp = new Date().toISOString()
    sensor.timestamp = sensor.timestamp.toISOString()
  
})

Sensor.beforeUpdate(async(sensor)=>{
    sensor.timestamp = new Date().toISOString()
    sensor.timestamp = sensor.timestamp.toISOString()
})

export default Sensor;

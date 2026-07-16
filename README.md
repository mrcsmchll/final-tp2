## Examen Final (corto) TP2

### Taller de Programación 2
#### Examen Final (15 de julio, 2026)
##### Enunciado: Sistema de monitoreo de sensores IoT

Se desea desarrollar un sistema backend que permita recibir,almacenary procesar lecturas enviadas por sensores IoT instalados en una planta industrial.
Cada sensor se identifica mediante **un código alfanumérico de 8 caracteres**
(ejemplo: `SEN4A9X1`).

Cada lectura enviada incluye:
● id: identificador del sensor
● tipo: tipo de sensor (TEMPERATURA, HUMEDAD, CO2)
● valor: valor numérico medido
● timestamp: fecha/hora ISO (ej: "2025-12-01T18:30:00Z")

###### Requerimientos del backend:
● Almacenar, actualizar y listar sensores.
● Validar los datos al recibir lecturas.
● Generar alertas cuando corresponda.
● Almacenar y listas alertas.

###### Objetivo del sistema:
1. Registrar sensores y su última lectura.
Si llega una lectura de un sensor ya existente, se debe

2. Implementar un sistema de alertas según umbrales:
● TEMPERATURA: alerta si valor > 35
● HUMEDAD: alerta si valor < 20
● CO2: alerta si valor > 1000

3. Permitir listar sensores y consultar alertas recientes.


###### Endpoints requeridos:

1. GET /sensores
Recibe una lectura y actualiza el sensor.
```
{
id: "SEN4A9X1",
tipo: "TEMPERATURA",
valor: 32.5,
timestamp: "2025-12-01T18:30:00Z"
}
```

2. POST /lecturas
Lista todos los sensores con su última lectura.


const {writeFileSync, readFileSync} = require('fs')

const citasFile = 'citas.json'

const leer_citas = () => {
  const citasJSON = readFileSync(citasFile, 'utf-8')
  const citas = JSON.parse(citasJSON)

  return citas
}

const registrar_cita = (nombre, edad, tipo, color, enfermedad) => {
  const citas = leer_citas()

  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad
  }

  const citasUpdate = [...citas, nuevaCita]

  writeFileSync(citasFile, JSON.stringify(citasUpdate))

  console.log('Cita registrada');
}

module.exports = {
  leer_citas,
  registrar_cita
}
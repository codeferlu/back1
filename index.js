const {leer_citas, registrar_cita} = require('./operaciones.js')

const operation = process.argv[2].toLocaleLowerCase()
const arguments = process.argv.slice(3)


switch (operation) {
  case 'leer':
    console.log(leer_citas()); 
    break;

  case 'registrar':
    const [nombre, edad, tipo, color, enfermedad] = arguments
    registrar_cita(nombre, edad, tipo, color, enfermedad)

  default:
    break;
}

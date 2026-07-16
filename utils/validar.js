const validarTipo = (tipo) => {
  let valido = false;
  const tipos = ["TEMPERATURA", "HUMEDAD", "CO2"];
  let index = 0;

  while (index < tipos.length && !valido) {
    if (tipo === tipos[index]) {
      valido = true;
    }
    index++;
  }
  return valido;
}

const validarValor = (valor) => {
  return typeof valor === "number" && !Number.isNaN(valor) && valor !== null && valor !== "";
};


export default { validarTipo, validarValor }
// numero 5
function eliminarDuplicados(arreglo, propiedad) {
  const resultado = [];
  const usados = {};

  for (let i = 0; i < arreglo.length; i++) {
    const valor = arreglo[i][propiedad];

    if (!usados[valor]) {
      usados[valor] = true;
      resultado.push(arreglo[i]);
    }
  }

  return resultado;
}

const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];

console.log(eliminarDuplicados(elementos, 'id'));

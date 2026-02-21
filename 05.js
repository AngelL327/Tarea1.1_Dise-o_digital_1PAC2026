function eliminarDuplicados(arreglo, propiedad) {
  const vistos = new Set();
  return arreglo.filter((item) => {
    if (vistos.has(item[propiedad])) {
      return false;
    }
    vistos.add(item[propiedad]);
    return true;
  });
}

const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];

const resultado5 = eliminarDuplicados(elementos, 'id');
console.log(resultado5);
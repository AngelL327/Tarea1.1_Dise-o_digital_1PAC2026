// numero 1
function agruparPorPropiedad(arreglo, propiedad) {
  const resultado = {};

  for (let i = 0; i < arreglo.length; i++) {
    const elemento = arreglo[i];
    const clave = elemento[propiedad];

    if (!resultado[clave]) {
      resultado[clave] = [];
    }

    resultado[clave].push(elemento);
  }

  return resultado;
}

const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];

console.log(agruparPorPropiedad(datos, 'categoria'));

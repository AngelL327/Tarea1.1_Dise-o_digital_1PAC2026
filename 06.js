// numero 6
function combinarListasSinRepetir(lista1, lista2) {
  const resultado = [];

  for (let i = 0; i < lista1.length; i++) {
    if (resultado.indexOf(lista1[i]) === -1) {
      resultado.push(lista1[i]);
    }
  }

  for (let j = 0; j < lista2.length; j++) {
    if (resultado.indexOf(lista2[j]) === -1) {
      resultado.push(lista2[j]);
    }
  }

  return resultado;
}

const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

console.log(combinarListasSinRepetir(lista1, lista2));

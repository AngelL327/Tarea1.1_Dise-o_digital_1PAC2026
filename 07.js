// numero 7
function contarPalabras(arreglo) {
  const resultado = {};

  for (let i = 0; i < arreglo.length; i++) {
    const palabra = arreglo[i];

    if (resultado[palabra]) {
      resultado[palabra]++;
    } else {
      resultado[palabra] = 1;
    }
  }

  return resultado;
}

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];

console.log(contarPalabras(palabras));

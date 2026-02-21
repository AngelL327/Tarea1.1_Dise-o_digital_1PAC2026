function contarPalabras(arreglo) {
  return arreglo.reduce((acc, palabra) => {
    if (!acc[palabra]) {
      acc[palabra] = 0;
    }
    acc[palabra]++;
    return acc;
  }, {});
}

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];

const resultado7 = contarPalabras(palabras);
console.log(resultado7);
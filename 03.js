// numero 3
function promedioPonderado(lista) {
  let suma = 0;

  for (let i = 0; i < lista.length; i++) {
    suma += lista[i].valor * lista[i].peso;
  }

  return suma;
}

const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];

console.log(promedioPonderado(notas));

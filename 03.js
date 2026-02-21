function promedioPonderado(lista) {
  return lista.reduce((acc, item) => {
    return acc + item.valor * item.peso;
  }, 0);
}

const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];

const resultado3 = promedioPonderado(notas);
console.log(resultado3);

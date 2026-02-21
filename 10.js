// numero 10
function verificarMayoresDeEdad(edades) {
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] < 18) {
      return false;
    }
  }

  return true;
}

const edades = [19, 25, 32, 17];
console.log(verificarMayoresDeEdad(edades));

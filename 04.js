// numero 4
function modificarPersona(persona, nuevoNombre) {
  const copia = {
    nombre: nuevoNombre,
    edad: persona.edad + 1
  };

  return copia;
}

const persona = { nombre: 'Luis', edad: 30 };
console.log(modificarPersona(persona, 'Carlos'));

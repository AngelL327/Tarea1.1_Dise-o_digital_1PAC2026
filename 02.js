// numero 2
function obtenerUsuario(id) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      if (id === 1) {
        resolve({ id: 1, nombre: 'Juan' });
      } else if (id === 2) {
        resolve({ id: 2, nombre: 'María' });
      } else {
        resolve({ id: id, nombre: 'Desconocido' });
      }
    }, 1000);
  });
}

obtenerUsuario(1).then(function(usuario1) {
  obtenerUsuario(2).then(function(usuario2) {
    console.log("Usuarios cargados: " + usuario1.nombre + " y " + usuario2.nombre);
  });
});

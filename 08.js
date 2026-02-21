// numero 8
function filtrarDisponibles(productos, categoria) {
  const resultado = [];

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === categoria && productos[i].stock > 0) {
      resultado.push(productos[i]);
    }
  }

  return resultado;
}

const productos = [
  { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
  { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
  { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];

console.log(filtrarDisponibles(productos, 'ropa'));

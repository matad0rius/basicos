import React from 'react'

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const { nombre, precio, id } = producto

// Agregar producto al carro

    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id )[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <h1>${precio}</h1>
            <button
                type="button"
                onClick={() => seleccionarProducto(id) }
            >Comprar</button>
        </div>
    );
}
 
export default Producto;
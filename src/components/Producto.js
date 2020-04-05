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

    // Eliminar producto del carrito

    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id );

        //Colocar los produtos en el carrito
        agregarProducto(productos)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <h1>${precio}</h1>
           
            {productos 
            ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id) }
                    >Comprar</button>
                )
            : 
                (
                    <button 
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                    >Eliminar</button>
                    
                )
            }
        </div>
    );
}
 
export default Producto;
import { createContext, useContext, useState } from "react";

// 1. Creamos el contexto
const CartContext = createContext();

// 2. Creamos el componente proveedor (Provider)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => {
      // Verificamos si el producto ya existe en el carrito
      const existe = prevCart.find((item) => item.id === producto.id);

      if (existe) {
        // Si existe, incrementamos la cantidad
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, lo agregamos con cantidad inicial de 1
        return [...prevCart, { ...producto, quantity: 1 }];
      }
    });
  }; // <--- ¡AQUÍ ESTABA EL ERROR! Faltaba cerrar esta función.

  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    // Filtramos el carrito para quedarnos con todos MENOS el que coincida con el id
    const carritoActualizado = cart.filter((item) => item.id !== id);
    setCart(carritoActualizado);
  };

  // Función para actualizar la cantidad (sumar o restar)
  const actualizarCantidad = (id, nuevaCantidad) => {
    // Si la cantidad baja a 0, mejor lo eliminamos del carrito
    if (nuevaCantidad <= 0) {
      eliminarProducto(id);
      return;
    }

    // Mapeamos el carrito y actualizamos solo el item que coincida
    const carritoActualizado = cart.map((item) =>
      item.id === id ? { ...item, quantity: nuevaCantidad } : item
    );
    setCart(carritoActualizado);
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCart([]);
  };

  // Propiedad computada: Cantidad total de items (para el icono del carrito)
  const totalCantidad = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Propiedad computada: Total a pagar (precio * cantidad)
  const totalPrecio = cart.reduce((acc, item) => {
    // 1. Intentamos convertir a decimal
    const precio = parseFloat(item.precio);

    // 2. Verificamos: ¿Es un número válido?
    const precioSeguro = isNaN(precio) ? 0 : precio;

    return acc + precioSeguro * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        eliminarProducto, // Pasamos la función unificada
        vaciarCarrito,
        totalCantidad,
        totalPrecio,
        actualizarCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto fácilmente
export const useCart = () => {
  return useContext(CartContext);
};
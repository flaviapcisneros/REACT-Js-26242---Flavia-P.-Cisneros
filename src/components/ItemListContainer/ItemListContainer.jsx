import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]); /* para guardar los productos que vienen de la promesa */
  const [errors, setErrors] = useState(null); /* si algo sucede en la promesa, se guarda el error en este estado */
  const [loading, setLoading] = useState(true); /* para mostrar un mensaje de carga mientras se resuelve la promesa */

  useEffect(() => {
    fetch("data/products.json") /* para traer los productos de un archivo json */ 
      .then((res) => {
        if(!res.ok) {
          throw new Error("Error al cargar los productos");
       }
       return res.json();
      }) 
      .then(data=> setProducts(data)) /* si la promesa se resuelve, se guardan los productos en el estado */
      .catch((error) => setErrors(error.message)) /* si la promesa falla, se guarda el error en el estado */
      .finally(() => setLoading(false)); /* finalmente, se cambia el estado de loading a false para que deje de mostrar el mensaje de carga */
  }, []);

  if (loading) return <p>Cargando productos...</p>; /* mientras se resuelve la promesa, se muestra un mensaje de carga */
  if (errors) return <p>{errors}</p>; /* si hay un error, se muestra el mensaje de error*/ 

  return (
    <section>
      <h1>Productos</h1>
      <ItemList products={products} />
    </section>
  //se repite porque uno es el nombre del prop y el otro es el nombre del estado que contiene los productos. Se podría cambiar el nombre del prop a "items" o "productos" para evitar confusión.
  );
 };

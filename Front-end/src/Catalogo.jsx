import './styles/catalogo.css'
import { useState, useEffect } from 'react'



export const Catalogo = () => {

  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const response = await fetch('http://localhost:3000')
        if (!response.ok) {
          throw new Error('fallo el fetch a imagenes')
        }
        const imagenesObtenidas = await response.json()
        setImagenes(imagenesObtenidas)

      } catch (error) {
        console.log(error)
      }
    };
    fetchImagenes()
  }, [])

  return (
    <>
      <section className="section-catalogo">
            <div className='contenedor-items'>
            {imagenes.map(image => (
              <article key={image.id}>
              <p>{image.nombre}</p>
              <img src={image.imagen} key={image.id} className='imgs' alt="fotos de producto" />
              <p>{image.descripcion}</p>
              <strong>${image.precio}</strong>
              </article>
            ))}
            </div>

      </section>
    </>
  )
}

import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = ({ greeting }) => {
  const { cart, clear, deleteOne, totalAmount } = useContext(CartContext);
  return (
    (Number(cart) !== 0) ? (
      <>
        <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
        <div className='container'>{
          cart.map((prod) => (
            <section className="p-2" key={prod.id}>
              <article className="card">
                <div className="row g-0">
                  <section className="col-md-3">
                    <img src={prod.img} className="img-fluid rounded-start imagenCarrito" alt={prod.description} />
                  </section>
                  <div className="col-md-9 row g-0">
                    <section className="col-md-6 d-flex justify-content-center align-items-center p-2">
                      <div className="card-body ">
                        <h5 className="card-title">{prod.title}</h5>
                        <p className="card-text"><small className="text-muted">ID: {prod.id}</small></p>
                      </div>
                    </section>
                    <section className="col-md-3 d-flex justify-content-center align-items-center p-2">
                      <div className="d-flex justify-content-center">
                        <p>Cantidad: <b>{prod.quantity}</b></p>
                      </div>
                    </section>
                    <section className="col-md-3 d-flex flex-column justify-content-center align-items-center p-2">
                      <p>Precio unitario: <b>${prod.price}</b></p>
                      <p>Total por unidades: <b>${prod.price * prod.quantity}</b></p>
                    </section>
                  </div>
                </div>
              </article>
              <article className="p-1">
                <div className="d-flex justify-content-end">
                  <span className="material-symbols-outlined mx-2 mb-1" onClick={() => deleteOne(prod.id)}>delete</span>
                  <Link to={`/detail/${prod.id}`} ><span className="material-symbols-outlined mx-2 mb-1">visibility</span></Link>
                </div>
              </article>
            </section>
          ))}
          <section className='d-flex justify-content-end'>
            <h2 className='m-2'>Total: {totalAmount()}$</h2>
            <button className='btn m-2' onClick={clear}>Vaciar Carrito</button>
            <Link className='btn m-2' to={`/checkOut`} >Continuar Compra</Link>
          </section>
        </div >
      </>
    ) : (
      <>
        <p className="p-3 mb-2 bg-secondary text-white">{greeting = "Regresa al home para ver mas productos!!!"}</p>
        <div className='div_empty'>
          <h3>Tu carrito está vacío.</h3>
          <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
        </div>
      </>
    )
  );
};

export default Cart

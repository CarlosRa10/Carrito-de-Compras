//Una vez compilado el jsx, se convierte en archivos js con funciones y objetos.
//Reglas en HTML
//Si un elemento TML tiene una etiqueta de apertura, deberás tener tambien la de cierre </>
//Cada componente tiene que tener un return, de otra forma no tendria sentido
//En el return debe haber maximo un solo elemento en el nivel máximo -  "único elemento raíz".
//1 manera de fragmentar 
//import {Fragment} from 'react'
//<Fragment></Fragment>
//2 manera de de fragmentar
// import React from 'react'
// <React.Fragment/>
//jsx se compone de la parte de importacion, la de state o funciones y luego la de html o vista
//useMemo - es similar a los Computes Properties de Vuejs
//Simplifica tus templates y en un Hook enfocado al performance porque evita que un codigo se ejecute si algunas de las dependencias que vamos a definir en ese useMemo no ha cambiado
import { useMemo } from "react";
//import Guitar from "./Guitar";

export default function Header({cart, removeFromCart,decreaseQuantity, increaseQuantity }){
    
    //state derivado - Es aquello que depende de otro state
    //const isEmpty = ()=>cart.length === 0 //tambien = cart.length === 0 - como variable en vez de función
    const isEmpty = useMemo(()=>cart.length === 0,[cart])//Este codigo(useMEmo) no se ejecuta hasta que cambien ciertas partes en el codigo
    //const cartTotal = ()=>cart.reduce((total,item)=>total+(item.quantity * item.price),0)//reduce-array metodo que toma dos parametros
    const cartTotal =useMemo(()=>cart.reduce((total,item)=>total+(item.quantity * item.price),0),[cart])
    return (
        
    <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            {isEmpty?(//isEmpty() - ya no es una funcion gracias al useMemo
                                <p className="text-center">El carrito esta vacio</p>
                            ):(
                                <>
                                <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(guitar=>(
                                        <tr key={guitar.id}>
                                            <td>
                                                <img 
                                                className="img-fluid" 
                                                src={`/img/${guitar.image}.jpg`} 
                                                alt="imagen guitarra" 
                                                />
                                            </td>
                                            <td>{guitar.name}</td>
                                            <td className="fw-bold">
                                                    ${guitar.price}
                                            </td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={()=>decreaseQuantity(guitar.id)}
                                                    >
                                                    -
                                                </button>
                                                    {guitar.quantity}
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                    onClick={()=>increaseQuantity(guitar.id)}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                    onClick={()=>removeFromCart(guitar.id)}//Si toma un parametro tienes que utilizar un callback
                                                    >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                            <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                            </>
                            )}

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
        
        
    )
}
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

export default function Header(){
    
    
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
                            <p className="text-center">El carrito esta vacio</p>
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
                                    <tr>
                                        <td>
                                            <img className="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                                        </td>
                                        <td>SRV</td>
                                        <td className="fw-bold">
                                                $299
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                -
                                            </button>
                                                1
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
                            <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
        
        
    )
}
//Un componente es una funcion en javascript y tiene que iniciar en mayusculas-se puede pasar los componentes con los Props
//Un componente en React es basicamente - Es tener html y javaScript es un solo archivo
//Un componente usualmente tiene dos propositos, que no  es necesariamete que ambas se cumplan 
//1 ) Ser re-utilizable - 2)separar la funcionalidad 
//Tienen que tener un return ya que es lo que te va a mostrar en pantalla 
//React Hooks o Hooks
//Es la base de react
//los Hooks te permite utilizar diferenes funciones de react en tus componentes
//que es el "State" en React -La pieza central de react-
//

import Guitar from "./components/Guitar"
import Header from "./components/Header"
//Puedes importar los componentes o ponerlos directamente en el codigo y te los importa

function App() {

  return (//El return es lo que se muestra en pantalla
    <>
    <Header />


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            <Guitar/>
            <Guitar/>
            <Guitar/>
            <Guitar/>
            <Guitar/>
            <Guitar/>
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App

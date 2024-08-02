//Un componente es una funcion en javascript y tiene que iniciar en mayusculas-se puede pasar los componentes con los Props
//Un componente en React es basicamente - Es tener html y javaScript es un solo archivo
//Un componente usualmente tiene dos propositos, que no  es necesariamete que ambas se cumplan 
//1 ) Ser re-utilizable - 2)separar la funcionalidad 
//Tienen que tener un return ya que es lo que te va a mostrar en pantalla 
//React Hooks o Hooks
//Es la base de react
//los Hooks te permite utilizar diferenes funciones de react en tus componentes
//que es el "State" en React -La pieza central de react-
//El estado es una variable con informacion relevante en nuestra aplicacion de react, algunas veces pertene a un componente en especifico y en otras deseas compartirlo
//Piensa en el state como el resultado de alguna interaccion en el sitio o aplicacion web: el listado, la imagen a mostrar en una galeria, si un usuario esta autenticado o no.
//El state es creado por el hook de useState() - siempre retorna un arreglo
//state = la variable que va a obtener toda la información - funcion = Es la funcin que utilizamos para modificar el state - valor inicial =({})
//cada que tu state cambia, tu aplicación de React va a renderizar y actualizarse con esos cambios, no es necesarios hacer nada mas.
//React tiene el doble render
//Regla de los hooks- Los Hooks se colocan en la parte superior de tus componentes de React.
//No se debe colocar dentro de condicionales, tampoco después de un return.
//useEffect - Un Hooks para diferentes escenarios. 
//useEffect siempre es un callback, que dependiendo como lo declaras va a realizar diferentes acciones.
//Es el sustituto de lo que antes era componentDidMount() y componentDidUpdate()
//useEffect se ejecuta automaticamente cuando el componente esta listo, es un buen lugar para colocar código para consultar una API o LocalStorage
//Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede actualizar el componente cuando ese cambio suceda
//Dependiendo del valor que pasemos en el array de dependencias (o no pasemos nada) el hook de udeEffect hará algo diferente.
//Statements - Una app de JS es una serie de statements, cada statement es una instrucción para hacer algo 
//Algunos statements son:
//Creacion de variables- Codigos de condicionales con if - Lanzar errores con throw new Error() - Iterar con While o for
//Expressions - Una expresión es algo que produce un valor.
//Algunas Expressions son:
//Ternarios - Utilizar un Array Method que genera un nuevo Array - .map que genera un nuevo array a diferencia de forEach
//Props en React - Es una forma de compartir informacón entre componentes
//Los componentes de React utilizan Props para comunicarse entre ellos. Puedes pasarle información de un componente padre al hijo por medio de estos props.
//Los props se parecen a los atributos en HTML, pero puedes pasarle arrays, objetos o funciones
//Los Props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre
//Eventos en React - la forma en que React maneja los eventos es muy similar a como lo hace JavaScript de forma nativa con algunos cambios.
//Los eventos son camelCase, es decir en lugar de onchange se utiliza onChange, en lugar de onclick se utiliza onClick
//Tambien a diferencia de JS y HTML, donde se coloca el nombre de la función en un string en React (JSX) se utiliza la función entre llaves {} 


import { useState, useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db"
//Puedes importar los componentes o ponerlos directamente en el codigo y te los importa

function App() {

  const [data, setData] = useState(db)//Si lo haces con una api, inicias con un arreglo vacio ([]) y consultas tu api y se llena tu state
  //si fuera una api, sin dependencias esta seria la recomendada
  //const [data, setData] = useState([])
  // useEffect(()=>{
  //   setData(db)
  // },[])


  // //State
  // const [auth, setAuth] = useState(false)
  // // console.log(auth)

  // useEffect(()=>{
  //   if(auth){
  //     console.log('Autenticado')
  //   }
  // },[auth])

  // setTimeout(() => {
  //   setAuth(true)
  // }, 3000);
  const [cart, setCart] = useState([])


  function addToCart(item){
    const itemExists = cart.findIndex(guitar=>guitar.id === item.id)
    if(itemExists >=0) {//El elemento existe en el carrito
      console.log('Ya existe...')
    }else{
      item.quantity = 1
      setCart([...cart,item])
    }
  }


  return (//El return es lo que se muestra en pantalla
    <>
    <Header />


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar)=>(
            <Guitar
            key={guitar.id}
                guitar={guitar}
                setCart={setCart}
                addToCart={addToCart}
            />
          ))}
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

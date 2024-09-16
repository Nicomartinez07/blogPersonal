import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { supabase } from "./lib/helper/supabaseClient";
import { posts } from "./utilies/mocks";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  //la variable (user) va a ir el valor inicial que va a tomar el useState (null),
  const [user, setUser] = useState(null);
  //El setUser(funcion actualizadora del estado) la utilizaremos para modificar el efecto
  //Si ingresa un nuevo estado se vuelve a ejecutar el codigo

  //useEfect sirve para ejecutar y renderizar
  useEffect(() => {
    const getSession = async () => {
      //DESTRUCTURACION nos permite obetner la propiedad deseada
      //Del lado derecho pido la Sesion con todos los datos, y del lado izquierdo
      //solo agarro lo que quiero { data, error }
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error); //Si hay error lo muestra
      } else {
        setUser(data?.session?.user); //Si no hay error agarra la informacion y la guarda en el estado
        // ? significa que puede no existir el usuario (en este caso)
      }
    };
    getSession();
  }, []);

  const handleLogin = async () => {
    //Pide el singInWithOAuth y despues destructuramos solamente el error
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github", //establece a github para vincuar
    });
    if (error) {
      console.log(error); //si tira error lo muestra
    }
  };

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      {/* Header */}
      <Header isDarkMode={isDarkMode} />

      {/* Boton para cambiar tema*/}
      <button className="animated-button" onClick={toggleTheme}>
        Cambiar a {isDarkMode ? "Tema Claro" : "Tema Oscuro"}
      </button>

      {/* Boton para iniciar sesion*/}
      <button className="animated-button" onClick={handleLogin}>
        Inicio de sesion de Github
      </button>

      {/* Renderiza múltiples posts */}
      {posts.map((post, index) => (
        <Post
          key={index}
          titulo={post.titulo}
          link={post.link}
          descripcion={post.descripcion}
          parrafo={post.parrafo}
        />
      ))}

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

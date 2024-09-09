import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { supabase } from "./lib/helper/supabaseClient";

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
      <button onClick={toggleTheme}>
        Cambiar a {isDarkMode ? "Tema Claro" : "Tema Oscuro"}
      </button>

      {/* Boton para iniciar sesion*/}
      <button onClick={handleLogin}>Inicio de sesion de Github</button>

      {/* Parte del post con informacion respectiva*/}
      <Post
        titulo={"Viaje a japon"}
        link={
          "https://imgs.search.brave.com/o2llqUmXoWPrGckgPGGpP1s6ei7S0AYzlxUgk_cIiKg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5taW51dG91bm8u/Y29tL3AvYmVkYjQ3/MDFkYTM4MDg3NTBi/OThmN2Y0ZjZhMzMz/NjEvYWRqdW50b3Mv/MTUwL2ltYWdlbmVz/LzA0MS83NjAvMDA0/MTc2MDMzOC82MTB4/MC9zbWFydC9ib2Nh/LTIwMDNqcGcuanBn"
        }
        descripcion={"Boca fue a jugar la final de la intercontinental a japon"}
        parrafo={
          "Boca fue a jugar la final de la intercontinental a japon, en la cual se enfretaba al Real Madrid"
        }
      />

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

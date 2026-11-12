import { useState, useEffect, useMemo } from 'react';


import './App.css'

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En orbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const planetas = [
        "Mercurio",
        "Venus",
        "Tierra",
        "Marte",
        "Júpiter",
        "Saturno",
        "Urano",
        "Neptuno" ];

  useEffect(() =>{
    console.log("¡El panel de control está listo!");
    
    const intervalo = setInterval(() =>{
      setCombustible(actual => Math.max(actual - 1, 0));
      setDistancia(actual => actual + 1)

    }, 1000)

    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado")
    }
  }, []);


  useEffect(() =>{
    console.log(`Combustible actualizado: ${combustible}`);
  }, [combustible]);
  
  const mensajeEstado = useMemo(() => {
    console.log("Calculando mensaje del estado...");
    return `Estado actual de la nave: ${estadoNave}`
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");

    const planetasDisponibles = planetas.filter(
      planeta => !planetasVisitados.includes(planeta)
    );

    if(planetasDisponibles.length === 0){
      console.log("Ya visitaste todo los planetas");
      return;
    }
    
    const indiceAleatorio = Math.floor(
      Math.random() * planetasDisponibles.length
    );

    const planetaSeleccionado = planetasDisponibles[indiceAleatorio]
    

    setPlanetasVisitados((planetas) => [
      ...planetas,
      planetaSeleccionado
    ]);
  }


  return (
    <>
    <div>
      <h1>Panel de control espacial</h1>
      <p>Distancia recorrida: {distancia} km</p>
      <p>Combustible: {combustible}</p>
      <p>{mensajeEstado}</p>

      <button 
      onClick={aterrizar}
      disabled={planetasVisitados.length === planetas.length}
      >
        Aterrizar
      </button>

      <h2>Planetas Visitados</h2>

      {planetasVisitados.map((planeta, index) =>(
        <p key={index}>{planeta}</p>
      ))}
    </div>
    </>
  )
}

export default App

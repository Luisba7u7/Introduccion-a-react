import { useState } from 'react'

import InputNumber from './InputNumber'
import Message from './Message'
import RestartButton from './RestartButton'

function generarNumero(){
    return Math.floor(Math.random() * 100) + 1;
}

function Game(){
  
    const [numeroSecreto, setNumeroSecreto] = useState(generarNumero);
    const [numeroIngresado, setNumeroIngresado] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [juegoTerminado, setJuegoTerminado] = useState(false);

    const comprobarNumero = () =>{
        if(numeroIngresado === '') return;

        const numero = Number(numeroIngresado);

        if(numero <1 || numero > 100){
            setMensaje('Ingresa un numero entre 1 y 100');
            return
        }

        if(numero === numeroSecreto){
            setMensaje('Correcto');
            setJuegoTerminado(true)
        }else if(numero < numeroSecreto){
            setMensaje('El numero secreto es mayor')
        } else{
            setMensaje('El numero secreto es menor')
        }
    };

    const reiniciarJuego = () =>{
        setNumeroSecreto(generarNumero());
        setNumeroIngresado('');
        setMensaje('');
        setJuegoTerminado(false);
    };
    
    return(
        <div>
            <h1>Adivina el numero</h1>
            <p>Estoy pensando en un numero entre el 1 y 100</p>

            <InputNumber 
            value={numeroIngresado}
            onChange={setNumeroIngresado}
            onGuess={comprobarNumero}
            disabled={juegoTerminado}
            />

            <Message message={mensaje}/>

            {juegoTerminado && (
                <RestartButton onRestart={reiniciarJuego}/>
            )}

        </div>

    )
}

export default Game;
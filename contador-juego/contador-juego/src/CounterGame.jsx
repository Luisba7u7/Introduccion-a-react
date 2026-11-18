import { useReducer, useRef, useCallback, useEffect } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action){
    switch(action.type){
        case "increment":
            return{
                count: state.count + 1,
                history: [...state.history, `+1 (Nuevo valor: ${state.count + 1})`]
            };
        case "decrement":
            return{
                count: state.count - 1,
                history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`]
            };
        case "reset":
            return initialState;
        default:
            return state
    }

}



function CounterGame(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const incrementBtnRef = useRef(null);

    const handleIncrement = useCallback(() => {
    dispatch({type: "increment"});
    }, []);

    const handleDecrement = useCallback(() => {
    dispatch({type: "decrement"});
    }, []);

    useEffect(() => {
        incrementBtnRef.current.focus();
    }, []);

    return(
        <div>
            <h2>Contador: {state.count}</h2>
            <button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            
            <h3>Historial de cambios:</h3>
            <ul>
                {state.history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>

        </div>
    )
}

export default CounterGame
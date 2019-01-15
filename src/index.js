import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { INCREMENT, DECREMENT } from "./actions";

// actions
const incrementAction = () => ({
  type: INCREMENT
});
const decrementAction = () => ({
  type: DECREMENT
});
// reducer
const initialState = {
  counter: 0
};
// una funcion pura no altera el valor de los parametros de entrada
// una funcion pura ante los mismos parametros de entrada retornan siempre la misma salida
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

// creando nuestro componente
const Counter = ({ increment, decrement, counter }) => (
  <div>
    <button onClick={decrement}>-</button>
    <h2>{counter}</h2>
    <button onClick={increment}>+</button>
  </div>
);

const rootElement = document.getElementById("root");
const render = () => {
  const incrementFn = () => store.dispatch(incrementAction());
  const decrementFn = () => store.dispatch(decrementAction());
  ReactDOM.render(
    <Counter
      increment={incrementFn}
      decrement={decrementFn}
      counter={store.getState().counter}
    />,
    rootElement
  );
};
// subscribir mi componente al store
store.subscribe(render);
render();

// funciones de Redux
// createStore = permite crear un store
// store contiene metodos que podemos utilizar tales como:
// store.dispatch = lanzar la acción
// store.subscribe = que me permite suscribir una funcion al deetctar cambios en el store
// store.getState() = me retorna el estado de la aplicación (store)

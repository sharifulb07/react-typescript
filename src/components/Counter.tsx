import { stat } from 'fs';
import React, {useReducer} from 'react'

const initialState={
    count:0,
}

const INCREMENT='INCREMENT';
const RESET='RESET';
const DECREMENT='DECREMENT';


type IncrementActionType={type:typeof INCREMENT};
type DecrementActionType={type:typeof DECREMENT};
type ResetActionType={type:typeof RESET};

type CounterActionType=IncrementActionType |DecrementActionType | ResetActionType;

type counterStateType={
    count:number;
}


const reducer=(state:counterStateType,action:CounterActionType)=>{
    
    switch(action.type){
        case INCREMENT:
            return{count:state.count+1};
            break;
        case RESET:
            return {count:0};
            break;
        case DECREMENT:
            return {count:state.count-1};
            break;
        default:
            throw new Error("Something Wrong ");
    }
}


function Counter() {
const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

      <h1>Count:{state.count} </h1>
      <button onClick={()=>{dispatch({type:INCREMENT})}}>INCREMENT</button>
      <button onClick={()=>{dispatch({type: RESET})}}>RESET</button>
      <button onClick={()=>{dispatch({type:DECREMENT})}}>DECREMENT </button>
    </div>
  )
}

export default Counter

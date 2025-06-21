import React, { useReducer } from 'react'
let initialValue=0
let initialReact={like:0,dislike:0}
const counter=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
             return state+1
        case 'DECREMENT':
            return state-1
            case 'RESET':
                return 0
                default:
                    return state
            }
}
const counter1=(state,action)=>{
    switch(action.type){
        case 'LIKE':
            return {like: state.like+1,dislike: state.dislike}
            case 'DISLIKE':
                return {like: state.like,dislike: state.dislike+1}
                default:
                    return state
    }
}
const Reducer = () => {
    const [count,dispatch]=useReducer(counter,initialValue)
    const [count1,dispatch1]=useReducer(counter1,initialReact)
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
         <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
          <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
          <h2>Likes: {count1.like} | Dislikes: {count1.dislike}</h2>
      <button onClick={() => dispatch1({ type: 'LIKE' })}>Like ❤️</button>
      <button onClick={() => dispatch1({ type: 'DISLIKE' })}>Dislike 👎</button>

    </div>
  )
}

export default Reducer
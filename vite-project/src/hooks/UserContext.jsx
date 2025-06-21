import { createContext } from "react";
//create context
export const UserContext=createContext();
// contextProvider
export const UserProvider=({children})=>{
    //const name='Varshana'
    const Users={name:'Varshana',age:19,dep:'ECE'}
    return(
        <UserContext.Provider value={Users}>
            {children}
        </UserContext.Provider>
    )
}
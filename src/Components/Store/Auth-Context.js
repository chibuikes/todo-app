import React, {useState} from 'react';
const AuthContext=React.createContext({mode:true,setMode:()=>{}})
export const AuthContextProvider=(props)=>{

const [mode, setMode]=useState(true)
  const fun=(a)=>{
   return  setMode((val)=>{return !val})
  }


    return <AuthContext.Provider 
      
      value={{mode,
      setMode:(a)=>{fun(a)}




      }
}>
{props.children}
    </AuthContext.Provider>
}
export default AuthContext

import { createContext, useState } from "react";

export const themecontext=createContext()

export const Themecontextprovider=(props)=>{
    let col
    function sav(){
    if(window.localStorage.getItem('colors').length!==0){
        return JSON.parse(window.localStorage.getItem('colors'))
    }
    else{
        return({ 
            bgcolor:"#eaeaea",
            bdcolor:"#c1c1c1",
            boxcolor:"#fcfaf5",
            boxshcolor:"#f0ead6",
            txtcolor:"black",
            winbg:"white",
            secondarytext:"#4b5156",
            acolor:"#17a2b8"
        })
    }
}
    const [colors,setcolors]=useState(()=>sav())
    return(
        <themecontext.Provider value={{colors,setcolors}}>
            {props.children}
        </themecontext.Provider>
    )
}
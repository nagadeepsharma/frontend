import { createContext, useState } from "react";

export const themecontext=createContext()

export const Themecontextprovider=(props)=>{
    let col
    if(window.localStorage.getItem('colors').length==0){
        col=window.localStorage.getItem('colors')
        console.log(col);
    }
    else
    {
        col={
            bgcolor:"#eaeaea",
            bdcolor:"#c1c1c1",
            boxcolor:"#fcfaf5",
            boxshcolor:"#f0ead6",
            txtcolor:"black",
            winbg:"white",
        }
    }
    const [colors,setcolors]=useState(col)
    return(
        <themecontext.Provider value={{colors,setcolors}}>
            {props.children}
        </themecontext.Provider>
    )
}
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
            acolor:"#17a2b8",
            btncolor:"#17a2b8",
        })
    }
}   
    const prof={
        github:"http://github.com/nagadeepsharma",
        resume:"https://drive.google.com/file/d/1r94xZ02VcdEo0euDIkR3EBBBpQ4deOSs/view?usp=sharing",
        instagram:"https://www.instagram.com/nagadeep.sharma/",
        linkedin:"https://www.linkedin.com/in/nagadeep-sharma-968a8616a/"
    }
    const[profile,setprofile]=useState(prof)
    const [colors,setcolors]=useState(()=>sav())
    return(
        <themecontext.Provider value={{colors,setcolors,profile}}>
            {props.children}
        </themecontext.Provider>
    )
}
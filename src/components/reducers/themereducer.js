const themereducer=(state={},action)=>{
    switch(action.type){
        case "light":
            const lc={
                bgcolor:"#eaeaea",
                bdcolor:"#c1c1c1",
                boxcolor:"#fcfaf5",
                boxshcolor:"#f0ead6",
                txtcolor:"black",
                winbg:"white",
                secondarytext:"#4b5156",
                acolor:"#17a2b8",
                btncolor:"black",
                changed:false,
            }
            localStorage.setItem('colors',JSON.stringify(lc))
            return lc 
        case "dark":
            const dc={
                bgcolor:"#15202b",
                bdcolor:"#164d56",
                boxcolor:"#172431",
                boxshcolor:"#111921",
                txtcolor:"#f4f4f4",
                winbg:"#192734",
                secondarytext:"#4b5156",
                acolor:"#17a2b8",
                btncolor:"#17a2b8",
                changed:true
            }
            localStorage.setItem('colors',JSON.stringify(dc))
            return dc
        default:
            if(localStorage.getItem('colors')){
                return JSON.parse(localStorage.getItem('colors'))
            }
            else{
            return {
            bgcolor:"#eaeaea",
            bdcolor:"#c1c1c1",
            boxcolor:"#fcfaf5",
            boxshcolor:"#f0ead6",
            txtcolor:"black",
            winbg:"white",
            secondarytext:"#4b5156",
            acolor:"#17a2b8",
            btncolor:"black",
            changed:false,
        }}
    }
}
export default themereducer;
const blogreducer=(state=[],action)=>{
    switch(action.type){
        case "loadblogs":
            state=action.payload
            return state
        default:
            return state
            
    }
}
export default blogreducer
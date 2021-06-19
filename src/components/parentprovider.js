import { Provider } from "react-redux";
import { combineReducers, createStore } from 'redux';
import themereducer from './reducers/themereducer';
import blogreducer from "./reducers/blogreducer";

export const Parentprovider=(props)=>{
    const allreducers=combineReducers({
        themes:themereducer,
        blogs:blogreducer,
    })
    const store=createStore(allreducers)

    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

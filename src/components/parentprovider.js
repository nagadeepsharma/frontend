import { Provider } from "react-redux";
import { createStore } from 'redux';
import themereducer from './reducers/themereducer';

export const Parentprovider=(props)=>{
    const store=createStore(themereducer)
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

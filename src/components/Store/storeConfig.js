
import { createStore } from "redux";
import { rootReducer } from "../Reducers/Reducers";

export const store = createStore(rootReducer)

    // store.subscribe(()=>{
    //     localStorage['redux-store'] = JSON.stringify(store.getState())
    // })


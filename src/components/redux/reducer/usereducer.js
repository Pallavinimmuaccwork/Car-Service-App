import {ADDTOCART} from "../action/action.js";


const initialState = {
    AddtoCart: [],
}

export const usereducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDTOCART : 
            return { ...state, AddtoCart: payload };

        default:
            return state;
    }

}
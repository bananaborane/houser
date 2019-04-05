import { createStore } from "redux";

let initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipCode: null,
  image: '',
  mortgage: null,
  rent: null
};

function reducer (state = initialState, action) {
    switch (action.type){
        case UPDATE_STEPONE:
            let { name, address, city, zipCode } = action.payload;
            return {...state, name, address, city, state: action.payload.state, zipCode};
        case UPDATE_STEPTWO:
            return {...state, image: action.payload  };
        case UPDATE_STEPTHREE:
            let { mortgage, rent} = action.payload
            return {...state, mortgage, rent};
        case CLEAR_INPUTS:
            return {
                name: '',
                address: '',
                city: '',
                state: '',
                zipCode: null,
                image: '',
                mortgage: null,
                rent: null
              };
        case ADD_HOUSE: 
              
        default: 
            return state;
    }
}




export const ADD_HOUSE = 'ADD_HOUSE'
export const CLEAR_INPUTS = 'CLEAR_INPUTS'
export const UPDATE_STEPONE = 'UPDATE_STEPONE'
export const UPDATE_STEPTWO = 'UPDATE_STEPTWO'
export const UPDATE_STEPTHREE = 'UPDATE_STEPTHREE'
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
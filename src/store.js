import { createStore } from "redux";

let initialState = {
    listOfHouses: [],
  name: '',
  address: '',
  city: '',
  state: '',
  zip_code: null,
  image: '',
  mortgage: null,
  rent: null
};

function reducer (state = initialState, action) {
    switch (action.type){
        case UPDATE_STEPONE:
            let { name, address, city, zip_code } = action.payload;
            return {...state, name, address, city, state: action.payload.state, zip_code: parseInt(action.payload.zip_code)};
        case UPDATE_STEPTWO:
            return {...state, image: action.payload  };
        case UPDATE_STEPTHREE:
            let { mortgage, rent} = action.payload
            return {...state, mortgage, rent};
        case CLEAR_INPUTS:
            return { ...state,
                name: '',
                address: '',
                city: '',
                state: '',
                zip_code: null,
                image: '',
                mortgage: null,
                rent: null
              };
        case DISPLAY_LIST:
              console.log(action.payload)
              return {...state, listOfHouses: action.payload}
        case ADD_HOUSE:
            const newHouse = {
                name: state.name,
                address: state.address,
                city: state.city,
                state: state.state,
                zip_code: parseInt(state.zip_code),
                image: state.image,
                mortgage: action.payload.mortgage,
                rent: action.payload.mortgage
            };
              const newHouseList = [...state.listOfHouses, newHouse];
              return { ...state, listOfHouses: newHouseList };
        default: 
            return state;
    }
}



export const ADD_HOUSE = 'ADD_HOUSE'
export const DISPLAY_LIST = 'DISPLAY_LIST'
export const CLEAR_INPUTS = 'CLEAR_INPUTS'
export const UPDATE_STEPONE = 'UPDATE_STEPONE'
export const UPDATE_STEPTWO = 'UPDATE_STEPTWO'
export const UPDATE_STEPTHREE = 'UPDATE_STEPTHREE'
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
import { ProductAdd, ProductGetById, ProductRemove, ProductGetAll } from "../actions/actionType"


const initialState = {
    items: [
        {id:1, reduxName: " Product 1", price: 100},
        {id:2, reduxName: " Product 2", price: 200},
        {id:3, reduxName: " Product 3", price: 300},

    ],
    isLoading: true,
};  

function productReducer(state= initialState, action) {
    switch (action.type) {


        case ProductGetAll:
            return {...state , item: state.items};


        case ProductGetById:
            return {...state , item:state.items.find((query) => query.id === action.Payload)};


        case ProductAdd:
            return {...state , item: state.items.concat([action.payload])};


        case ProductRemove:
            return {...state , item: state.items.filter((query) => query.id !== action.payload)};
        default:
            return state;
    }
}


export default productReducer;
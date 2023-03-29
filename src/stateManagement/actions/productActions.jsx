import {ProductAdd , ProductGetById , ProductRemove , ProductGetAll ,FETCH_PRODUCTS_FAIELD ,FETCH_PRODUCTS_SUCC , FETCH_PRODUCTS_START} from "./actionType"
 
export const getAll = () =>({
    type: ProductGetAll,    
})

export const getById = id =>({
    type:ProductGetById,
    payload: id
})

export const add = item =>({
    type:ProductAdd,
    payload: item
}) 

export const remove = id =>({
    type:ProductRemove,
    payload: id
})



export function getAllProduct (dispatch){
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    dispatch(fetchProductsStart());
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dispatch(fetchProductsSucc(data));
    })
    .catch(error => {
        dispatch(fetchProductsFaield(error));
    })

}



export const fetchProductsStart = () =>({
    type:FETCH_PRODUCTS_START,
})

export const fetchProductsFaield = (data) =>({
    type:FETCH_PRODUCTS_FAIELD,
    payload: data
})

export const fetchProductsSucc = (errorMessage) => ({
    type:FETCH_PRODUCTS_SUCC,
    payload: errorMessage
})
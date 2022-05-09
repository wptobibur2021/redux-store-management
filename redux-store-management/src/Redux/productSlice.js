import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        allProducts: (state, action) => {
            console.log('Payload: ', action.payload)
            state.products.push(action.payload)
        }
    }
})

export const { allProducts } = productSlice.actions
export default productSlice.reducer
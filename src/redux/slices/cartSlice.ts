import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartStateProps {
    products: ProductProps[]
}

const initialState: CartStateProps = {
    products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductProps>) => {
            state.products.push(action.payload)
        },
        removeFromCart: (state, action: PayloadAction<ProductProps>) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type{ PayloadAction} from "@reduxjs/toolkit";

interface ICart{
    products: IProduct[];
    total: number;
}
const initialState:ICart = {
    products: [],
    total:0
}
const cardSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddToCart: (state, action: PayloadAction<IProduct>) => {
            const exsisting = state.products.find((product) => product._id === action.payload._id)
            if (exsisting) {
                exsisting.quantity=exsisting.quantity! +1
            }
             else {
                state.products.push({...action.payload,quantity:1})
            }  
            state.total+=action.payload.price
        },
        removeOne: (state,action: PayloadAction<IProduct>) => {
           const exsisting = state.products.find((product) => product._id === action.payload._id)
            if (exsisting && exsisting.quantity!>1) {
                exsisting.quantity=exsisting.quantity! -1
            }
            state.total-=action.payload.price
        },
        removeFormCard: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter((product) => product._id !== action.payload._id)
            state.total -= action.payload.price * action.payload.quantity!;
        }
         
    }
})
export const {AddToCart, removeFormCard,removeOne} = cardSlice.actions

export default cardSlice.reducer
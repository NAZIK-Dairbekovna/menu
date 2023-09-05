import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Food {
    id?: number;
    name: string;
    price: number;
    photo: any;
    quantity?: any;
}

interface Order {
    id?: number;
    name: string;
    price: number;
    photo: any;
    quantity?: any;
}

interface MenuState {
    foods: Food[];
    orders: Order[];

}

const initialState: MenuState = {
    foods: [],
    orders: []
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        addFood: (state, action: PayloadAction<Food>) => {
            state.foods.push(action.payload);
        },
        newFood: (state, action: PayloadAction<Food>) => {
            state.foods.push(action.payload);
        },
        Order: (state, action: PayloadAction<Order>) => {
            const found = state.orders.find(el => el.id === action.payload.id)
            if(found){
                state.orders = state.orders.map(el => el.id === action.payload.id ?
                    {...el, quantity: el.quantity + 1}: el )
            }else{
                state.orders.push({...action.payload, quantity:1});
            }
        },
        decreaseOrder: (state, action: PayloadAction<Order>) => {
            const foundIndex = state.orders.findIndex(el => el.id === action.payload.id);
            if (foundIndex !== -1) {
                if (state.orders[foundIndex].quantity === 1) {
                    state.orders.splice(foundIndex, 1);
                } else {
                    state.orders[foundIndex].quantity -= 1;
                }
            } else {
                state.orders.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFood: (state, action) => {
            state.orders = state.orders.filter(el => el.id !== action.payload.id);
        }


    },
});


export const {addFood, newFood, Order, decreaseOrder, removeFood} = menuSlice.actions;
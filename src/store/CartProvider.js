import { useReducer } from "react"
import CartContext from "./cart-context"

const initialState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD_ITEM") {
        const updateTotalAmount = state.totalAmount += action.item.price * action.item.amount;
        const existingItemIndex = state.items.findIndex((item)=> item.id === action.item.id);
        let updateItems;
        if(state.items[existingItemIndex]) {
            let updatedItem = {
                ...state.items[existingItemIndex],
                amount: state.items[existingItemIndex].amount + action.item.amount
            }
            updateItems = [...state.items];
            updateItems[existingItemIndex] = updatedItem;
        } else {
            updateItems = state.items.concat(action.item);
        }
        
        return {
            ...state,
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    } else if(action.type === "REMOVE_ITEM" ) {
        const existingItemIndex = state.items.findIndex((item)=> item.id === action.id);
        let updateItems;
        const existingItem = state.items[existingItemIndex];
        if(existingItem.amount === 1) {
            updateItems = state.items.filter((item)=> item.id !== action.id)
        } else {
            let updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            updateItems = [...state.items];
            updateItems[existingItemIndex] = updatedItem;
        }
        const updateTotalAmount = state.totalAmount -= existingItem.price;
        return {
            ...state,
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }
    return initialState;
} 

const CartProvider = (props) => {
    const [cartState, dispatchCartActions] = useReducer(cartReducer, initialState);
    const addItemHandler = (item) => {
        dispatchCartActions({
            type: 'ADD_ITEM',
            item : item
        })
    }
    const removeItemHandler = (id) => {
        dispatchCartActions({
            type: 'REMOVE_ITEM',
            id : id
        })
    }
    const cartContext  = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
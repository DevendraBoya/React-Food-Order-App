import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const addItemHandler = (cartItem) => {
        cartCtx.addItem({...cartItem, amount: 1});
    }
    const removeItemHandler = (cartId) => {
        cartCtx.removeItem(cartId);
    }
    const cartItems = <ul className="max-h-80 overflow-auto m-0 p-0">
            {
                cartCtx.items.map((cartItem)=> 
                <CartItem
                key={cartItem.id}
                name={cartItem.name}
                price={cartItem.price}
                amount={cartItem.amount}
                onAdd ={addItemHandler.bind(null, cartItem)}
                onRemove={removeItemHandler.bind(null, cartItem.id)}
                />
                )
            }
        </ul>;
    return(
        <Modal onClick={props.onCloseClick}>
            {cartItems}
            <div className="flex justify-between items-center font-[bold] text-2xl mx-0 my-4">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="text-right">
                <button onClick={props.onCloseClick}
                className="cursor-pointer bg-transparent border ml-4 px-8 py-2 rounded-[25px] border-solid border-[#8a2b06] hover:bg-[#5a1a01] hover:text-[white] hover:border-[#5a1a01]  active:bg-[#5a1a01] active:text-[white] active:border-[#5a1a01] text-[#8a2b06]">Close</button>
                {hasItems && <button className="cursor-pointer border ml-4 px-8 py-2 rounded-[25px] border-solid border-[#8a2b06] bg-[#8a2b06] text-white">Order</button>}
            </div>

        </Modal>
    )
}

export default Cart;
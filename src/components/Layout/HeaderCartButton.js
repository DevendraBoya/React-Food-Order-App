import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [bumpEffect, setBumpEffect] = useState(false);
    const cartItems = cartCtx.items;
    const noOfItemsInCart = cartItems.reduce((currentNum, item)=>{
        return currentNum += item.amount;
    },0)
    const btnClasses = ` ${bumpEffect ? 'bump' : ''}
    group cursor-pointer 
    bg-[#4d1601] hover:bg-[#2c0d00] 
    active:bg-[#2c0d00] text-[white] 
    flex justify-around items-center 
    font-bold px-12 py-3 rounded-[25px] 
    border-[none]`;
    useEffect(()=> {
        let timer;
        if(cartItems.length === 0) {
            return;
        }
        setBumpEffect(true);
        timer = setTimeout(()=>{
            setBumpEffect(false);
        },300)
        return () => {
            clearTimeout(timer);
        }
    },[cartItems])
    return(
        <button onClick={props.onClick}
        className={btnClasses}>
            <span className="w-[1.35rem] h-[1.35rem] mr-2">
                <CartIcon/>
            </span>
            <span >Your Cart</span>
            <span 
            className="bg-[#b94517] font-bold ml-4 px-4 py-1 rounded-[25px] group-hover:bg-[#92320c] group-active:bg-[#92320c]">
                {noOfItemsInCart}
            </span>
        </button>
    )
}

export default HeaderCartButton;
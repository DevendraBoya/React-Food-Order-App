import { useContext, useRef, useState } from "react";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
    const itemRef = useRef();
    const cartCtx = useContext(CartContext)
    const [isItemCountValid, setIsItemCountValid] = useState(true);
    const addItemSubmitHandler = (event) => {
        event.preventDefault();
        const itemCount = itemRef.current.value;
        if(itemCount < 1 ||
        itemCount > 5 ) {
            setIsItemCountValid(false);
        }
        cartCtx.addItem({
            ...props.meal, 
            amount: +itemCount
        })
    }
    return(
        <form className="text-right" onSubmit={addItemSubmitHandler}>
            <Input 
            ref={itemRef}
            label={'Amount'} 
            input={
                {
                    id: 'amount_'+ props.id,
                    type: 'number',
                    defaultValue: 1,
                    min: 1,
                    max: 5,
                    step: 1
                } 
            }/>
            <button className="cursor-pointer bg-[#8a2b06] hover:bg-[#641e03] hover:border-[#641e03] active:bg-[#641e03] border-[#641e03] border text-[white] font-bold px-8 py-1 rounded-[20px] border-solid8a2b06]">+ Add</button>
            {!isItemCountValid && 
            <p>Item Count should be (1-5) </p>}
        </form>
    )
}

export default MealItemForm;
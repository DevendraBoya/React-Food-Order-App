import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const {name, description, price, id} = props.meal;
    const formattedPrice = `$${price.toFixed(2)}`;
    return(
        <li className="flex justify-between m-4 pb-4 border-b-[#ccc] border-b border-solid">
            <div>
                <h3 className="mt-0 mb-1 mx-0">{name}</h3>
                <div className="italic">{description}</div>
                <div className="font-bold text-[#ad5502] text-xl mt-1">{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm meal={props.meal} />
            </div>
        </li>
    )
}

export default MealItem;
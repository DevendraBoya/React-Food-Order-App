
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center mx-0 my-4 px-0 py-4 border-b-2 border-b-[#8a2b06] border-solid">
      <div>
        <h2 className='text-[#363636] mt-0 mb-2 mx-0'>{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-[bold] text-[#8a2b06]">{price}</span>
          <span className="font-[bold] border text-[#363636] px-3 py-1 rounded-md border-solid border-[#ccc]">x {props.amount}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <button className='font-[bold] hover:bg-[#8a2b06] hover:text-[white] text-xl text-[#8a2b06] border w-12 text-center bg-transparent cursor-pointer ml-4 m-1 rounded-md border-solid border-[#8a2b06]' onClick={props.onRemove}>−</button>
        <button className='font-[bold] hover:bg-[#8a2b06] hover:text-[white] text-xl text-[#8a2b06] border w-12 text-center bg-transparent cursor-pointer ml-4 m-1 rounded-md border-solid border-[#8a2b06]' onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

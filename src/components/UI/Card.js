
const Card = (props) => {
    return(
        <div className="shadow-[0_2px_8px_rgba(0,0,0,0.25)] bg-[white] p-4 rounded-[14px]">{props.children}</div>
    )
}

export default Card;
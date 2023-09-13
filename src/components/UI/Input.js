import React from "react";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className="flex items-center mb-2">
            <label className="font-bold mr-4">{props.label}</label>
            <input 
            ref={ref}
            {...props.input} 
            className="w-12 border pl-2 rounded-[5px] border-solid border-[#ccc]"/>
        </div>
    )
})

export default Input;
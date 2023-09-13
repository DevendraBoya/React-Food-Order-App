import { Fragment } from "react"

const backDrop = (props) => {
    return (
        <div className="fixed w-full h-screen z-20 bg-[rgba(0,0,0,0.75)] left-0 top-0" onClick={props.onClick}></div>
    )
}

const modalOverLay = (props) => {
    return (
        <div className="fixed w-[90%] bg-[white] shadow-[0_2px_8px_rgba(0,0,0,0.25)] z-30 animate-[slide-down_300ms_ease-out_forwards] p-4 rounded-[14px] left-[5%] top-[20vh] md:w-[40rem] md:left-[calc(50%_-_20rem)]">
            <div>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <Fragment>
            {
                backDrop(props)
            }
            {
                modalOverLay(props)
            }
        </Fragment>
    )
}

export default Modal;
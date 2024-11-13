'use strict'

const Button = ({action, placeHolder, active = true, icon, css}) => {
    const handleClick = () => {
        if(active) action()
        return
    }
    return (
        <button active={active.toString()} onClick={handleClick} className={` ${css}  hover:scale-[1.03] transition-all flex items-center justify-center gap-4 text-white p-4 pl-8 pr-8 text-sm rounded-full bg-primary`}>
            <h1>{placeHolder}</h1>
            {icon && <img className=" h-5" src={icon}></img>}
        </button>
    )
}

export default Button
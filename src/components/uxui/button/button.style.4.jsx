'use strict'

const Button = ({action, placeHolder, active, icon}) => {
    const handleClick = () => {
        if(active) action()
        return
    }
    return (
        <button active={active} onClick={handleClick} className=" grow basis-full text-danger border-[1px] border-danger hover:scale-[1.03] transition-all flex items-center justify-center gap-4  p-4 pl-8 pr-8 text-sm rounded-full bg-white">
            <h1>{placeHolder}</h1>
            {icon && <img className=" h-5" src={icon}></img>}
        </button>
    )
}

export default Button
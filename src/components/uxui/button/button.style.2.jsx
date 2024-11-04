'use strict'

const Button = ({action, placeHolder, active}) => {
    const handleClick = () => {
        if(active) action()
        return
    }
    return (
        <div>
            <button onClick={handleClick} className={` ${active ? 'bg-slate-800 hover:bg-slate-600' : 'bg-slate-400'} w-full transition-all flex-shrink-0 inline-block p-4 pl-10 pr-10 text-white rounded-lg `}>
                {placeHolder}
            </button>
        </div>
    )
}

export default Button
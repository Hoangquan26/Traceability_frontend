'use strict'

const Button = ({action, placeHolder, active}) => {
    return (
        <div>
            <button onClick={action} className={` ${active ? 'bg-slate-800 hover:bg-slate-600' : 'bg-slate-400'} w-full transition-all flex-shrink-0 inline-block p-4 pl-10 pr-10 text-white rounded-lg `}>
                {placeHolder}
            </button>
        </div>
    )
}

export default Button
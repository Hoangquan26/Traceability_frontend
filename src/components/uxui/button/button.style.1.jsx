'use strict'

const Button = ({action, placeHolder}) => {
    return (
        <div>
            <button onClick={action} className=" transition-all hover:text-white hover:border-white hover:bg-primary flex-shrink-0 inline-block p-4 pl-10 pr-10 text-primary border-primary rounded-sm border-[1px]">
                {placeHolder}
            </button>
        </div>
    )
}

export default Button
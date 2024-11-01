'use strict'

export default function Tooltip ({message}) {
    return <div className=" absolute top-[-15px] left-full text-sm p-2 pr-4 pl-4 rounded-md bg-white border-gray-400 border-[1px]">
        {message}
    </div>
}
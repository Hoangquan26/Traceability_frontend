'use strict'

export default function({title, desciption, children}) {
    return (
        <>
            <div className="pl-20 pr-20 flex justify-between lg:gap-20">
                <div className=" flex flex-col gap-2 shrink">
                    <h1 className=" text-lg font-medium">{title}</h1>
                    <p className=" text-wrap text-sm">{desciption}</p>
                </div>
                {children}
            </div>
        </>
    )
}
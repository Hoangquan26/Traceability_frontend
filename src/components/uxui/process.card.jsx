'use strict'

export default function ProcessCard ({process_name, process_index, process_thumb}) {
    return (
        <div className=" relative w-full h-full overflow-hidden">
                <img className=" h-full w-full object-cover" src={process_thumb}></img>
                <div className=" flex flex-col p-6 pr-6 pl-6 absolute bg-white bottom-6 left-6 right-6 shadow-md gap-2">
                    <h1 className=" text-primary text-2xl font-medium ">{process_name}</h1>
                    <p className=" text-grayColor">{process_index}</p>
                </div>
        </div>
    )
}
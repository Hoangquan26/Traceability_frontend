'use strict'

/*
{times = {step: 1, name: '', status: false}}
*/ 
export default function Timeline({times, index}) {
    return (
        <div className=" flex justify-between items-center">
            {
                times.length ? times.map((item, i) => 
                    <>
                    {(i) ?
                        <div className={` duration-300 transition-all flex-grow rounded-full shrink h-1 ${index >= i ? 'bg-slate-900 basis-full'  : 'bg-slate-400 basis-32'}`}></div>
                     : ''}

                    <div className={` duration-300 transition-all rounded-full ${index >= i ? 'bg-slate-900' :  'bg-slate-400'} text-white  m-4`}>
                        <p className=" w-6 h-6 flex items-center justify-center p-2">
                            {item.step}
                        </p>
                    </div>
                    </>
                ) : ''
            }
        </div>
    )
}
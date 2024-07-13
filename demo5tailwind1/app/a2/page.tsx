
'use client'

import { useState } from "react"
import clsx from 'clsx';

import Groq from "groq-sdk";

import { ask } from '@/lib/ai'

import xx from '@/lib/a'
import { ChatGroq } from "@langchain/groq";




const model = new ChatGroq({
    model: "mixtral-8x7b-32768",
    temperature: 0,
    apiKey: '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'
});


export default function a2() {

    const [q ,setQ] = useState('')

    const [arr, setArr] = useState<string[]>([])

    const [msg, setMsg] = useState<string[]>(
        Array.from({ length: 50 }, (_, i) => i + 1 + '')
    )



    const add = async (msg:string) => {

        setArr([...arr,msg])

        var str: string = ''


        for await (const chunk of await model.stream(
            msg
        )) {
            str = str + `${chunk.content}`
            setArr([...arr, msg, str])

        }






    }


    return (


        <div>

            <input value={q} onChange={ (e) => {
                setQ(e.target.value)
            }}  />


            <button onClick={ () => add(q)} >ddddddddddd</button>

            {/* <button onClick={ () => add('hello')} >添加

            </button> */}

            <div className="flex flex-col space-y-5 ">



                {

                    arr.map((item, i) => (



                        <div  className={clsx('flex bg-gray-400', { 
                            'flex-row-reverse ': i % 2 === 0 ,
                            
                        })}  key={i} >

                            <div className={clsx('', { 
                                ' bg-yellow-300': i % 2 === 0 ,
                                'bg-pink-500': i % 2 !== 0 

                            })} >值：{item}，下标{i}</div>

                        </div>




                    ))


                }

            </div>


        </div>
    )
}
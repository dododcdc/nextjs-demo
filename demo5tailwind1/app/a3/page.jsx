
'use client'

import { ChatGroq } from "@langchain/groq";




const model = new ChatGroq({
    model: "mixtral-8x7b-32768",
    temperature: 0,
    apiKey: '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'
});

export default function a3() {


    async function ask() {
        for await (const chunk of await model.stream(
            "Write me a 1 verse song about goldfish on the moon"
        )) {
            console.log(`${chunk.content}
          ---`);
        }

    }


    const bbb = () => {
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Hello, world!',role:'user' })
        })
        .then((res) =>{
            res.text().then( (data) => console.log(data) )
        } )
    }



    return (

        <div>ggg


            <button onClick={(e) => ask()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">点击jjjjjjjjjj</button>



            <button onClick={bbb} >bbbbbbbbbb</button>


        </div>
    )



}
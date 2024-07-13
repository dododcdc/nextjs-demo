'use client'
import React, { useRef } from 'react';


import { useState, useEffect } from 'react';

import { ChatGroq } from "@langchain/groq";


// const model = new ChatGroq({
//     model: "mixtral-8x7b-32768",
//     temperature: 0,
//     //apiKey: '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'
//      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
// });





const CodeBlock = ({ code }) => (


    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
    </pre>
);

const ChatMessage = ({ message, isUser }) => {


    // 将消息分为代码块和非代码块
    const arr = message.split('```')



    return (

        <div className={`flex ${isUser ? 'flex-row-reverse' : ''}  rounded-lg  mb-4`}>
            <div className={` rounded-lg p-3 ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>

                
                {
                    // 数组长度大于0说明ai返回的内容有代码，需要对代码内容和非代码内容做不同的展示处理
                arr.length > 0 ? 
                    arr.map((item, index) => {

                        return (
                            <div>

                                {
                                    // 根据下标判断是代码块还是普通文字
                                    index % 2 == 1 ? <CodeBlock code={item.substring(item.indexOf('\n') + 1)} /> : item
                                }
                            </div>
                        )

                    }
                    ) 
                    // 如果ai返回的内容没有代码块直接展示
                    : (<div>{message} </div>)
                }

            </div>
        </div>
    )

};

const ChatInterface = () => {



    const [model, setModel] = useState()

    useEffect(() => {
        setModel(new ChatGroq({
            model: "mixtral-8x7b-32768",
            temperature: 0,
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
        }))

    })

    const [messages, setMessages] = useState([]);

    const [inputMessage, setInputMessage] = useState('');


    const rollRef = useRef();


    useEffect(() => {
        console.log('update')
        // 每次消息更新后，滚动到底部
        const element = rollRef.current;
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }, [messages]);


    const handleSendMessage = async () => {

        const msg = inputMessage
        setInputMessage('');
        if (inputMessage.trim() !== '') {

            setMessages([...messages, { text: msg, isUser: true }]);



            let str = ''
            for await (const chunk of await model.stream(
                msg
            )) {
                str = str + `${chunk.content}`

                setMessages([...messages, { text: msg, isUser: true }, { text: str, isUser: false }]);
            }



        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">

            <div ref={rollRef} className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    // 'flex flex-row-reverse'
                    // <div key={index} className={`flex `}>

                    <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />

                    // </div>
                ))}
            </div>
            <div className="p-4 flex">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg mr-2"
                    placeholder="Type your message here..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatInterface;
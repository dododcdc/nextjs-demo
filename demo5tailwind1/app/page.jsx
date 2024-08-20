'use client'
import { useRef } from 'react';

import OpenAI from 'openai';



import { useEffect, useState } from 'react';


import Markdown from 'react-markdown';

import remarkGfm from 'remark-gfm';


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, okaidia, gruvboxDark,duotoneDark,funky,prism } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ChatMessage = ({ content, role }) => {

    return (

        <div className={`flex ${role === 'user' ? 'flex-row-reverse' : ''}  rounded-lg  mb-4`}>
            <div className={` rounded-lg p-3 ${role === 'user' ? 'bg-blue-500 text-white' : ' bg-gray-300'}`}>


                <Markdown

                    remarkPlugins={[remarkGfm]}
                    children={content}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    {...rest}
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}
                                    style={prism}
                                />
                            ) : (
                                <code {...rest} className={className}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />


            </div>
        </div>
    )

};

const ChatInterface = () => {

    const [model, setModel] = useState()



    useEffect(() => {
        setModel(new OpenAI(
            {
                baseURL: process.env.NEXT_PUBLIC_BASE_URL_KIMI,
                apiKey: process.env.NEXT_PUBLIC_API_KEY_KIMI,
                dangerouslyAllowBrowser: true
            }
        ));
    }, [])


    const [messages, setMessages] = useState([]);
    const [messageCount, setMessageCount] = useState(0);

    const [inputMessage, setInputMessage] = useState('');

    const rollRef = useRef();


    useEffect(() => {

        // 每次消息更新后，滚动到底部
        const element = rollRef.current;
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }, [messages]);


    useEffect(() => {

       if(messageCount>=1) {
        sendMessage()
       }
           
        

    },[messageCount])

    const sendMessage = async () => {

        const messagesHis = messages.slice(-15)

        const stream = await model.chat.completions.create({
            model: process.env.NEXT_PUBLIC_MODEL_KIMI,
            messages: messagesHis,
            stream: true,
        });
        let str = ''
        for await (const chunk of stream) {
            str = str + `${chunk.choices[0]?.delta?.content}`
            setMessages([...messages,  { role: 'assistant', content: str }]);
        }

        setInputMessage('')

    }



    const handleSendMessage = async () => {

        const userMsg = inputMessage;

        setInputMessage("");


        setMessages([...messages, { role: 'user', content: userMsg }]);
    };


    return (
        <div className="flex flex-col h-screen bg-gray-100">

            <div ref={rollRef} className="flex-1 p-4 overflow-y-auto">
                {messages.map((message, index) => (

                    <ChatMessage key={index} content={message.content} role={message.role} />

                ))}
            </div>

            <form className='w-full flex justify-center mb-5 ' onSubmit={(event) => {
                event.preventDefault();

                setMessageCount(messageCount + 1)

                handleSendMessage();
            }}>

                <input
                    type="text"
                    className="basis-2/3 p-2 border border-gray-300 rounded-lg mr-2"
                    placeholder="Type your message here..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button type='submit'
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Send
                </button>
            </form>

        </div>
    );
};

export default ChatInterface;
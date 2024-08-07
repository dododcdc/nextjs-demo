'use client'
import { useRef } from 'react';

import OpenAI from 'openai';


import { useEffect, useState } from 'react';


import Markdown from 'react-markdown';

import remarkGfm from 'remark-gfm';



import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ChatMessage = ({ message, isUser }) => {

    return (

        <div className={`flex ${isUser ? 'flex-row-reverse' : ''}  rounded-lg  mb-4`}>
            <div className={` rounded-lg p-3 ${isUser ? 'bg-blue-500 text-white' : ' bg-gray-300'}`}>

                
                <Markdown
                
                    remarkPlugins={[remarkGfm]}
                    children={message}
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
                                    style={materialDark}
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
                baseURL: 'https://api.deepseek.com',
                apiKey: process.env.NEXT_PUBLIC_API_KEY_DEEP_SEEK,
                dangerouslyAllowBrowser: true
            }
        ))


    }, [])


    const [messages, setMessages] = useState([]);

    const [inputMessage, setInputMessage] = useState('');

    const rollRef = useRef();


    useEffect(() => {

        // 每次消息更新后，滚动到底部
        const element = rollRef.current;
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }, [messages]);



    const handleSendMessage = async () => {

        const msg = inputMessage
        setInputMessage('');
        if (msg.trim() !== '') {

            setMessages([...messages, { text: msg, isUser: true }]);
            const stream = await model.chat.completions.create({
                model: 'deepseek-coder',
                messages: [{ role: 'user', content: msg }],
                stream: true,
            });
            let str = ''
            for await (const chunk of stream) {
                str = str + `${chunk.choices[0]?.delta?.content}`
                setMessages([...messages, { text: msg, isUser: true }, { text: str, isUser: false }]);
            }

        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">

            <div ref={rollRef} className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg, index) => (

                    <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />

                ))}
            </div>
            <form className='flex md:4 ' onSubmit={ (event) => {
                event.preventDefault();

                handleSendMessage();
            }  }>

                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg mr-2"
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
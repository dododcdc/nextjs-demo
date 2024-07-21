

'use client'
import { useState, useEffect } from 'react'


const ChatMessage = ({ isUser, msg }) => {

    return (
        <div className={`w-full flex flex-row ${isUser ? 'justify-end text-red-600' : 'justify-start'} `} >
            <div className='bg-slate-500 rounded-md p-3 '  >{msg}</div>
        </div>
    )

}
const A6 = () => {

    const [messages, setMessages] = useState([
        {
            isUser: true,
            msg: 'hello'
        },
        {
            isUser: false,
            msg: 'hi'
        },
        {
            isUser: true,
            msg: 'how are you'
        },
        {
            isUser: false,
            msg: 'i am fine'
        }
    ])



    const gg = (newMsg) => {

        const newMessage = { isUser: !messages[messages.length - 1].isUser, msg: newMsg };



        setMessages(prevMessages => [...prevMessages, newMessage]);

    }

    return (

        <div>

            {
                messages.map((message, index) => {

                    return (
                        <div key={index}  >
                            <ChatMessage isUser={message.isUser} msg={message.msg} />
                        </div>
                    )
                })
            }

            <form onSubmit={(event) => {
                event.preventDefault(); // 阻止表单的默认提交行为
                gg('gggggg');
            }} >
                <button type='submit' >添加消息</button>

            </form>
        </div>

    );
}

export default A6;
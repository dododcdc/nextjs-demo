'use client'

import 'github-markdown-css'
import { Noto_Sans_Javanese } from 'next/font/google';
import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark,materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import remarkGfm from 'remark-gfm'
const PostContent = () => {

    const source = `
| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ ~remark-gfm~ |
`
    const markdown = `
# hello 
> ggggggggg
~~~js
console.log('It works!')
~~~`
    return (
        <div >

            
            <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]} children={source} />
            {
                // eslint-disable-next-line
                // <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} className="markdown-body" />
                // <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown}  />
                <ReactMarkdown
                    children={markdown}
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

            }

        </div>
    );
};

export default PostContent;
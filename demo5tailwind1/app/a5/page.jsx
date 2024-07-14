'use client'

import 'github-markdown-css'
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

import style from  './styles.module.css'
import Markdown from 'react-markdown';

const PostContent = () => {

    const source = `
    # Hello, world!
    `


    const source2 = `
# Hello, world!
---
~this doesn't work.~
    `
    return (
        <div className={style.markdown}>
            <ReactMarkdown  remarkPlugins={[gfm]} children={source2} />
        </div>
    );
};

export default PostContent;
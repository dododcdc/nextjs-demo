'use client'

import React, { useRef } from 'react';




import { useState } from 'react';

import ReactMarkdown from 'react-markdown';

export default function a5() {


    const markdownContent = `
    # Hello World
    
    This is a **bold** and *italic* text.
    
    \`\`\`
    console.log('Hello, world!');
    \`\`\`
    
    - List item one
    - List item two
    
    [Link to Google](https://www.google.com)
  `;


    return (
        <div>

            <ReactMarkdown>{markdownContent}</ReactMarkdown>
            
        </div>
    )

}
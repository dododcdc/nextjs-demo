
'use client'
import Link from "next/link";
import React, { useState } from 'react';

export default  function Layout({ children }: { children: React.ReactNode}){

  const [count, setCount] = useState(0);



  const handleClick = () => {

  
   console.log("mmm")
    setCount(count + 1); // 增加计数
  };

    return(
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">

                <div>
                <Link href="/g">返回G</Link>
                </div>

            <div>sidbar</div>


            <button onClick={handleClick}>增加</button>
            <p>计数: {count}</p> 
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
}
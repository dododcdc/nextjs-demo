

import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import "./globals.css";



import { Button } from 'antd';

import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ["latin"] });



import Header  from "./components/Header/Header";
import Header2  from "./components/Header2/Header2";



export const metadata: Metadata = {
  title: "gggg",
  description: "hello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body >
        <AntdRegistry>

        <Header />



          {children}
          
        </AntdRegistry>
      </body>

    </html>
  );
}

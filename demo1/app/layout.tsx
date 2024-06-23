

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { Box } from '@chakra-ui/react';

import WbHeader from "@/app/components/Header/header";




const inter = Inter({ subsets: ["latin"] });

import { Providers } from './providers'



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>


        <Providers>
          <Box height={['auto', '100vh', '100vh']} bgGradient='linear(to-r, green.200, pink.500)'>

            <WbHeader />



            {children}

          </Box>

        </Providers>


      </body>
    </html>
  );
}

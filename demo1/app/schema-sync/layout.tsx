import Link from "next/link";
import { Link as ChakraLink } from '@chakra-ui/react';
import React from "react";
import {
    Flex,
    Box,
    VStack, Button, Square, Center, Text
} from '@chakra-ui/react'
import { MdAdd, MdDelete, MdEdit } from "react-icons/md"

import SiderBar from '@/app/components/SiderBar/SIderBar'


export default function Layout({ children }: { children: React.ReactNode }) {

    return (


        <Flex h="100%">
            <SiderBar />
            

            <Box  flex='1' bg='tomato'>
                {children}
            </Box>
        </Flex>
















    )

}
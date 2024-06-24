
'use client'

import { Box, HStack, Center,Spacer, Flex, Heading, Text, Button  } from '@chakra-ui/react'

import { TextUnderline } from '@/app/components/TextUnderline/TextUnderline';
import Link from 'next/link';

export default function WbHeader() {

    const handleClick = () => {
        console.log("提交")
    }


    return (
        <HStack  bg={'blue.400'} spacing='50px'>
        <Link href='/' >
        <Box p='5' >
        <Heading as={'h1'}  fontSize={'3xl'} display={{ base: 'none', md: 'block' }}>
          <TextUnderline>wb-data</TextUnderline>
          </Heading>
        </Box>
        </Link>
        <HStack spacing='25px'>
          <Link href="/datasource">
          
          <Text 
              color="white" // 正常状态下的颜色
              _hover={{
                color:'pink.400', // 鼠标悬停时的颜色
                cursor:"pointer"
              }}
            >
              数据源
            </Text>
            </Link>

            <Link href="/schema-sync">
            <Text
              color="white" // 正常状态下的颜色
              _hover={{
                color: 'pink.400', // 鼠标悬停时的颜色
                cursor:"pointer"
              }}
            >
              元数据同步
            </Text>
            </Link>

            <Link href="/query">
            <Text
              color="white" // 正常状态下的颜色
              _hover={{
                color: 'pink.400', // 鼠标悬停时的颜色
                cursor:"pointer"
              }}
            >
              数据查询
            </Text>
            </Link>
     

        </HStack>

      </HStack>
    )
}
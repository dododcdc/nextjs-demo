
'use client'

import {
  Box, HStack, Center, Spacer, Flex, Heading, Text, Button, Popover, PopoverTrigger, PopoverContent
  , PopoverArrow
  , PopoverCloseButton
  , PopoverHeader
  , PopoverBody


} from '@chakra-ui/react'

import { TextUnderline } from '@/app/components/TextUnderline/TextUnderline';
import Link from 'next/link';

interface NavItem {
  label: string
  subLable?: String
  children?: Array<NavItem>
  href?: string

}

function gg(a: Array<NavItem>) {

  return (

    a.map((item) => (
      <Popover>
        <PopoverTrigger>{
          item.href?  (<Link href={item.href} ><Button>{item.label}</Button></Link>) : <Button>{item.label}</Button>
          }
          
        </PopoverTrigger>
        <PopoverContent bg={'blue'}>
          {
            item.children && (
              gg(item.children)
            )
          }
          
        </PopoverContent>
      </Popover>


    ))


  )



}

export default function WbHeader() {





  const menuList: Array<NavItem> = [
    {
      label: '数据源'
      , href: '/datasource'

    },
    {
      label: '元数据同步'
      , href: 'schema-sync'
    },

    {
      label: '元数据操作'

      , children: [
        {
          label: '库表管理'
          , href: '/schema'
          ,children: [
            {
              label:'gggg'
              
            }
          ]

        },
        {
          label: '元数据对比'
          , href: '/ggg'
        }
      ]
    },
    {
      label: '自助查询'
      , href: 'query'
    }


  ]


  return (
    <HStack bg={'blue.400'} spacing='50px'>

      <Link href='/' >
        <Box p='5' >
          <Heading as={'h1'} fontSize={'3xl'} display={{ base: 'none', md: 'block' }}>
            <TextUnderline>wb-data</TextUnderline>
          </Heading>
        </Box>
      </Link>
      <HStack spacing='25px'>
        {gg(menuList)}
        {
          menuList.map((item) => (

            <Link href={`${item.href}`}>
              <Text
                color="white" // 正常状态下的颜色
                _hover={{
                  color: 'pink.400', // 鼠标悬停时的颜色
                  cursor: "pointer"
                }}
              >{item.label}</Text>
            </Link>

          ))
        }



      </HStack>

    </HStack>
  )
}
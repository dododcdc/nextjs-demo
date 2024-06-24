'use client'
import { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Center,
    Stack,
    HStack,
    Button,
    Box,IconButton

} from '@chakra-ui/react'

import { MdAdd, MdDelete,MdEdit } from "react-icons/md"

import { useToast } from '@chakra-ui/react'
import { px } from 'framer-motion'

export default function datasource() {

    const dataList = [
        {
            id: '1',
            name: 'mysql1',
            type: 'mysql',
            url: 'jdbc:mysql//localhost:3306/exp1'

        },
        {
            id: '2',
            name: 'mysql2',
            type: 'mysql',
            url: 'jdbc:mysql//localhost:3306/exp2'

        },
        {
            id: '3',
            name: 'mysql3',
            type: 'mysql',
            url: 'jdbc:mysql//localhost:3306/exp3'

        },

    ];

    const deleteItem = (id: string) => {
        // 根据 id 删除数据项的逻辑
        // 更新 dataList 状态
        console.log(id)
    };

    const editItem = (id: string) => {
        console.log(id+'更新')
    }

    return (
        <Box width='100%' display="flex" justifyContent="center" p='50px'>

            <Box width='70%' borderRadius='10px' textAlign="center" p='50px' bg='white'  >
                <Stack direction='row' spacing={4}>
                    <Button leftIcon={<MdAdd />} colorScheme='blue' variant='solid'>
                        添加
                    </Button>
                    <Button leftIcon={<MdDelete />} colorScheme='red' variant='solid'>
                        删除
                    </Button>
                </Stack>
                <TableContainer >
                    <Table variant='striped' colorScheme='teal' >
                        <TableCaption>数据源</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>数据源名称</Th>
                                <Th>数据源类型</Th>

                                <Th>数据源地址</Th>

                                <Th >操作</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {dataList.map((item) => (
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td>{item.type}</Td>
                                    <Td>{item.url}</Td>
                                    <Td>
                                        {/* 删除按钮 */}

                                        <HStack spacing='10px'>
                                        <IconButton 
                                         variant='outline'
                                         colorScheme='red'
                                         aria-label='Send email'
                                         
                                         icon={<MdEdit />}
                                         onClick={ () => editItem(item.id) }
                                        />

                                       
                                        <IconButton
                                            variant='outline'
                                            colorScheme='red'
                                            aria-label='Send email'
                                            
                                            icon={<MdDelete />}
                                            onClick={ () => deleteItem(item.id) }
                                        />
                                        </HStack>
                                    
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>数据源名称</Th>
                                <Th>数据源类型</Th>
                                <Th>数据源地址</Th>
                                <Th >操作</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>

            </Box>

        </Box>
    )

}
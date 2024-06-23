'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'

interface TextUnderlineProps {
  children: React.ReactNode
}

export const TextUnderline = ({ children }: TextUnderlineProps) => {
  return (
    <Box
      as={'span'}
      color={useColorModeValue('pink.400', 'pink.300')}
      position={'relative'}
      zIndex={10}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        w: 'full',
        h: '30%',
        bg: useColorModeValue('pink.100', 'pink.900'),
        zIndex: -1,
      }}>
      {children}
    </Box>
  )
}

import React from "react";

import { Box, VStack, Flex, Link as ChakraLink, Button, useColorModeValue } from "@chakra-ui/react";

export default function siderBar() {


    return (
        <Box

        >
            <VStack p="4" direction="column">

                <ChakraLink
                    color='red'
                    _hover={{ textDecoration: "none", color: 'yellow' }}
                    href="/"
                >
                    <Button variant="ghost" w="full" justifyContent="left">
                        <Box display="flex" alignItems="center" fontSize="sm">
                            <i className="fas fa-home"></i>
                            <span >Home</span>
                        </Box>
                    </Button>

                </ChakraLink>
                <ChakraLink
                    color={"blue"}
                    _hover={{ textDecoration: "none", color: "pink" }}
                    href="/about"
                >
                    <Button variant="ghost" w="full" justifyContent="left">
                        <Box display="flex" alignItems="center" fontSize="sm">
                            <i className="fas fa-info-circle"></i>
                            <span >About</span>
                        </Box>
                    </Button>
                </ChakraLink>
                <ChakraLink
                    color="blue"
                    _hover={{ textDecoration: "none", color: "pink" }}
                    href="/services"
                >
                    <Button variant="ghost" w="full" justifyContent="left">
                        <Box display="flex" alignItems="center" fontSize="sm">
                            <i className="fas fa-briefcase"></i>
                            <span >Services</span>
                        </Box>
                    </Button>
                </ChakraLink>
                <ChakraLink
                    color="blue"
                    _hover={{ textDecoration: "none", color: "pink" }}
                    href="/contact"
                >
                    <Button variant="ghost" w="full" justifyContent="left">
                        <Box display="flex" alignItems="center" fontSize="sm">
                            <i className="fas fa-address-book"></i>
                            <span >Contact</span>
                        </Box>
                    </Button>
                </ChakraLink>
            </VStack>
        </Box>

    );
};


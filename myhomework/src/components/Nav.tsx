import React from "react";
import{Link, Outlet} from 'react-router-dom'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
 
export default function Nav(){
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={ 'lightblue'}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        mb={'30px'}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
             </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2" >
                <Link to='/'>Home</Link>
            
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
         <Button variant="ghost"><Link to='/Saudi'>Saudi Arabia</Link></Button>
         <Button variant="ghost"><Link to='/Italy'>Italy</Link></Button>
         <Button variant="ghost"><Link to='/Egypt'>Egypt</Link></Button>
               
            </HStack>
             
          </HStack>
          
        </Flex>
      </chakra.header>
      <Outlet/>

    </React.Fragment>
  );
};

import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";

interface imagesSchema{
    img:string,
    title:string,
    link:string


}
export default function Cont(props:imagesSchema){
  return (
    
    <Flex
       mb={'150px'}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src={props.img}
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            href= {props.link}
            display="block"
            fontSize="2xl"
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
           {props.title}
           
          </Link>
           
        </Box>
      </Box>
    </Flex>
  );
};


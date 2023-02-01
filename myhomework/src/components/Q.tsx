import React from "react";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import Cont from "./Cont";

import img1 from "../assets/asia.jpg";

function Cairo() {
  return (
    <SimpleGrid justifyContent={"center"} columns={2}>
      <Image w={"500px"} h={"400px"} src="https://tse3.mm.bing.net/th?id=OIP.8d0CG2-HIQ915UIo2_EPYwHaDt&pid=Api&P=0 "></Image>

      <Box>
        <Box fontSize={40} fontWeight={20}>
          Cairo
        </Box>
        Cairo is the capital of the north African country of Egypt. It is one of
        the largest cities in the world and it is the largest in Africa. Cairo
        is known as being a very densely populated city as well as being the
        center of Egypt's culture and politics.
      </Box>
    </SimpleGrid>
  );
}

export default Cairo;

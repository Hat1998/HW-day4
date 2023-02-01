import React from "react";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import Cont from "./Cont";

import img1 from "../assets/asia.jpg";

function Riyadh() {
  return (
    <SimpleGrid justifyContent={"center"} columns={2}>
      <Image
        w={"500px"}
        h={"400px"}
        src="https://images.unsplash.com/photo-1543282649-6d12df6b5fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cml5YWRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ></Image>
      
      <Box>
      <Box fontSize={40} fontWeight={20}>Riyadh</Box>
        Riyadh, Arabic Al-Riyāḍ, city and capital of Saudi Arabia. The city’s
        name is derived from the plural of the Arabic rawḍah, meaning gardens or
        meadows, so named for a natural fertility provided by its location at
        the juncture of Wadis Ḥanīfah and Al-Baṭḥāʾ. The spectacular sight of
        Riyadh from the air, illuminated in the evening by city lights, is
        reminiscent of its eponymous meadows; a bright sea of lights dot the
        desert as if fluorescent flower gardens have suddenly blossomed among
        its dark contours. The city is located in the Minṭaqat Al-Riyāḍ, one of
        the country’s 13 provinces, and is situated in the central portions of
        both the country and the larger Arabian Peninsula. Few of the world’s
        cities have transformed as rapidly as Riyadh, which grew from a small,
        fortified desert village in the 17th century into a modern metropolis of
        several million inhabitants in the 20th century. Area city, 600 square
        miles (1,550 square km). Pop. (2010) 5,188,286.
      </Box>
    </SimpleGrid>
  );
}

export default Riyadh;

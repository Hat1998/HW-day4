import React from "react";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import Cont from "./Cont";

import img1 from "../assets/asia.jpg";

function Rome() {
  return (
    <SimpleGrid justifyContent={"center"} columns={2}>
      <Image
        w={"500px"}
        h={"400px"}
        src="https://tse4.mm.bing.net/th?id=OIP.S6DPhUMdW6kwkbC0V4vDagHaFD&pid=Api&P=0"
      ></Image>
       <Box>
       <Box fontSize={40} fontWeight={20}>Rome</Box>
        Rome, Italian Roma, historic city and capital of Roma provincia
        (province), of Lazio regione (region), and of the country of Italy. Rome
        is located in the central portion of the Italian peninsula, on the Tiber
        River about 15 miles (24 km) inland from the Tyrrhenian Sea. Once the
        capital of an ancient republic and empire whose armies and polity
        defined the Western world in antiquity and left seemingly indelible
        imprints thereafter, the spiritual and physical seat of the Roman
        Catholic Church, and the site of major pinnacles of artistic and
        intellectual achievement, Rome is the Eternal City, remaining today a
        political capital, a religious centre, and a memorial to the creative
        imagination of the past. Area city, 496 square miles (1,285 square km);
        province, 2,066 square miles (5,352 square km). Pop. (2011) city,
        2,617,175; province, 3,997,465; (2022 est.) city, 2,761,632; province,
        4,222,631.
      </Box>
    </SimpleGrid>
  );
}

export default Rome;

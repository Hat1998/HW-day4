import React from "react";
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import Cont from "./Cont";
import img1 from "../assets/asia.jpg";
import img2 from "../assets/africa.jfif";
import img3 from "../assets/yo.jfif";
import Saudi from "./Saudi";


function ContContainer() {
   return (
    <SimpleGrid columns={3}  >
         <Cont img= {img1} title="Asia" link={'/Saudi'}/>
         <Cont img= {img2} title="Europe" link={'/Italy'}/>
         <Cont img= {img3} title="Africa" link={'/Egypt'}/>
     </SimpleGrid>
  );
}

export default ContContainer;

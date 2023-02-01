import React from 'react'
import {Box, SimpleGrid} from '@chakra-ui/react'
import Cont from './Cont'

import img1 from "../assets/sa.jfif";
 import Riyadh from './Riyadh';

 interface imagesSchema{
  img:string,
  title:string


}
function Saudi() {
  return (
    <Box >
        <SimpleGrid columns={1}  >
         <Cont img= {img1} title="Saudi Arabia" link={ '/Saudi/Riyadh'}/>

        </SimpleGrid>
      
    </Box>
  )
}

export default Saudi

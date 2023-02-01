import React from 'react'
import {Box, SimpleGrid} from '@chakra-ui/react'
import Cont from './Cont'

import img1 from "../assets/eg.jfif";
 import Riyadh from './Riyadh';

 interface imagesSchema{
  img:string,
  title:string


}
function Egypt() {
  return (
    <Box >
        <SimpleGrid columns={1}    >
         <Cont img= {img1} title="Egypt" link={ '/Egypt/Cairo'}/>
         
        </SimpleGrid>
      
    </Box>
  )
}

export default Egypt

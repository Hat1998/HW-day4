import React from 'react'
import {Box, SimpleGrid} from '@chakra-ui/react'
import Cont from './Cont'

 import img1 from "../assets/i.jfif";
 import Riyadh from './Riyadh';

 interface imagesSchema{
  img:string,
  title:string


}
function Italy() {
  return (
    <Box>
        <SimpleGrid columns={1}  >
         <Cont img= {img1} title="Italy" link={ '/Italy/Rome'}/>
         
        </SimpleGrid>
      
    </Box>
  )
}

export default Italy

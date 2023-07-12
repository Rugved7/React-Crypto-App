import { Box, Image} from "@chakra-ui/react";
import React from "react";
import crypto from "../assets/crypto1.png";

const Home = () => {
  return (
    <Box bgColor={"white"} w={"full"} h={"100vh"}>
     
       
      
        <Image
          w={"full"}
          h={"full"}
          objectFit={"cover"}
         
          src={crypto}
          filter={"blue(1)"}
        />
    
   
    </Box>
       
  );
};

export default Home;
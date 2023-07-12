import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'

const Exchanges = () => {
  // Now for showing the data on UI   
  // Step 2  assigning states 
  const [exchanges, setExchanges] = useState([])                       // ------------------------------>  initially we assigned usestate as null
  const [isLoading, setIsLoading] = useState(true)                        //  ------------------------------> Display Loading while data is loading
  const [error, setError] = useState(false)

  // Step 1 - making async function
  useEffect(() => {                                                     // ------------------------------>  function to call API request
    const fetchExchanges = async () => {                                 // ------------------------------>  making async function
      try{
        const { data } = await axios.get(`${server}/exchanges`)             // ------------------------------>  requestiong data via axios 
        setExchanges(data);                                                 // ------------------------------>  for showing data 
        setIsLoading(false)                                                // ------------------------------>  once data is ready , make loading false
      }catch(error){
        setError(true)
        setIsLoading(false);
      }                                          // ------------------------------> printing data
     
    }

    fetchExchanges(); // calling function
  }, [])

  if (error) {
    return <div><ErrorComponent/></div>
  }

  return (
    <Container maxW={'container.xl'}>
      {isLoading ? <Loader /> : <>    {/* if data is loading then show loader else <> Show data in these brackets</> */}

        <HStack wrap={'wrap'}>
          {exchanges.map((i) => (
            <ExchangeCard
              key={i.id}
              name={i.name}
              image={i.image}
              country={i.country}
              url={i.url} />
          ))}

        </HStack>


      </>}
    </Container>
  );
}

const ExchangeCard = ({ name, image, country, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"dark-lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={image}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />

      <Text noOfLines={1}>{name}</Text>


      <Heading size={"md"} >
        {country}
      </Heading>


    </VStack>
  </a>
);


export default Exchanges
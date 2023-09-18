import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { Botao } from "./Button/Botao"

export const Card = () => {
  return(
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Header></Header>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" marginTop='5px' />
          <Center>
            <Botao></Botao>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
)}
import React from "react";
import DarkMode from "../Components/DarkMode";
import { Button, Box, Flex } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Box
    
  position="fixed"
  top="0"
  left="0"
  right="0"
  backgroundColor="gray.300"
  color="black"
  height="5rem"
>
  <Flex
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
    maxW="1200px"
    mx="auto"
    marginTop="1rem"
    
    px={3}
  >
    <Button
      as="a"
      href="#inicio"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
    >
      INICIO
    </Button>
    <Button
      as="a"
      href="#Configuracion-inicial"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
    >
    Configuración Inicial
    </Button>
    <Button
      as="a"
      href="#API-FRONT"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
    >
    SYMFONY API - REACT FRONT
    </Button>
    <Button
      as="a"
      href="#Integracion"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
    >
     Integración
    </Button>
    <Button
      as="a"
      href="#Seguridad"
      fontSize={{ base: "16px", md: "20px" }}
      mr={{ base: "0", md: "10px" }}
      mb={{ base: "10px", md: "0" }}
      width="auto"
    >
      Seguridad
    </Button>
    <DarkMode />
  </Flex>
</Box>
  )}
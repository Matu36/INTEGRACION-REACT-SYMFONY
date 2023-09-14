import React from "react";
import DarkMode from "../Components/DarkMode";
import { Box, Flex, Spacer, useColorModeValue, Button } from "@chakra-ui/react";

export default function NavBar() {
  const bgColor = useColorModeValue("yellow.400", "cyan.700");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      backgroundColor={bgColor}
      color={textColor}
      height="auto"
      boxShadow="md"
      zIndex="999"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        maxW="1200px"
        mx="auto"
        marginTop="1rem"
        px={3}
        py={2}
      >
        <Button
          as="a"
          href="#inicio"
          fontSize={{ base: "16px", md: "20px" }}
          mb={{ base: "10px", md: "0" }}
          width="auto"
          variant="unstyled"
          marginRight="30px"
        >
          Inicio
        </Button>
        <Button
          as="a"
          href="#Configuracion-inicial"
          fontSize={{ base: "16px", md: "20px" }}
          mb={{ base: "10px", md: "0" }}
          width="auto"
          variant="unstyled"
          marginRight="30px"
        >
          Configuración
        </Button>
        <Button
          as="a"
          href="#integracion"
          fontSize={{ base: "16px", md: "20px" }}
          mb={{ base: "10px", md: "0" }}
          width="auto"
          variant="unstyled"
          marginRight="30px"
        >
          Integración
        </Button>
        <Button
          as="a"
          href="#corsyseguridad"
          fontSize={{ base: "16px", md: "20px" }}
          mb={{ base: "10px", md: "0" }}
          width="auto"
          variant="unstyled"
          marginRight="30px"
        >
          Cors y Seguridad
        </Button>
        <Button
          as="a"
          href="#webpack"
          fontSize={{ base: "16px", md: "20px" }}
          mb={{ base: "10px", md: "0" }}
          width="auto"
          variant="unstyled"
          marginRight="30px"
        >
          Webpack
        </Button>
        <Spacer />
        <DarkMode />
      </Flex>
    </Box>
  );
}

import React from "react";
import NavBar from "./NavBar";
import { Text, Box, Image, Flex } from "@chakra-ui/react";


export default function Home() {
  return (
    <Box>
      <NavBar />
      <br />
      <br />
      <Box
        id="inicio"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        margin="30px"
      >
        <Text
          marginTop={{ base: "30px", md: "0" }}
          fontSize={{ base: "50px", md: "70px" }}
          fontWeight="extrabold"
        >
          SYMFONY - REACT
        </Text>
        <Text
          fontSize={{ base: "50px", md: "70px" }}
          fontWeight="extrabold"
          color="yellow.400"
          style={{
            "@media screen and (max-width: 768px)": {
              fontSize: "20px",
              width: "150%",

              justifyContent: "center",
              marginLeft: "10px",
            },
            maxWidth: "100%",
          }}
        >
          Integrando Symfony con React
        </Text>
        <br />
        <br />
        <Box maxWidth="1000px">
          <Text
            margin="left"
            fontSize="20px"
            fontWeight="bold"
            textAlign="justify"
          >
            En este post vamos a explicar como integrar SYMFONY con REACT;
            Utilizaremos a SYMFONY como API REST y a REACT desde el lado del
            cliente.
          </Text>
        </Box>
      </Box>
      <br />
      <Flex
        alignItems="center"
        textAlign="center"
        marginLeft="100px"
        style={{
          "@media screen and (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          },
          maxWidth: "100%",
        }}
      ></Flex>

      <br />
      <br />
      <br />
      <Box id="Configuracion-inicial">
        <Text
          fontSize="50px"
          marginLeft={{ base: 5, md: "100px" }}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Configuración Inicial
        </Text>
        <br />
        <Text
          marginLeft={{ base: 5, md: "100px" }}
          textAlign="justify"
          maxWidth="1000px"
          fontWeight="bold"
          fontSize={{ base: "16px", md: "18px" }}
          w={{ base: "100%", md: "auto" }}
          width={{ base: "90%", md: "auto" }}
        >
         Lo primero que debemos hacer es descargar nuestro proyecto de Symfony; una vez descargado, a los paquetes habituales tenemos debemos instalar lo siguiente:
         composer require nelmio/cors-bundle:^2.3; Esto nos intalara el paquete "nelmio/cors-bundle": "^2.3", que nos va evitar los problemas de CORS y poder configurar la seguridad.
         Para esto, una vez que instalamos nelmio, nuestro archivo nelmio_cors.yaml (dentro de packages) debería quedar asi:
         nelmio_cors:
  defaults:
    allow_credentials: true
    allow_origin: [ '*' ]
    allow_headers: [ '*' ]
    allow_methods: [ 'GET', 'POST', 'PUT', 'DELETE' ]


        </Text>
      </Box>
      <br />
      <br />
      <br />

      <Box id="API-FRONT">
        <Text
          fontSize="50px"
          marginLeft={{ base: 5, md: "100px" }}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          SYMFONY API - REACT FRONT
        </Text>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{ base: 5, md: "100px" }}
        >
          Formas de uso de ambas tecnologías
        </Text>
        <br />
        <br />

        <br />
        <br />
      </Box>
      <Box id="Integracion">
        <Text
          fontSize="50px"
          marginLeft={{ base: 5, md: "100px" }}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Integración
        </Text>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{ base: 5, md: "100px" }}
        >
          Integrando ambas tecnologías
        </Text>
        <br />
        <br />
      </Box>

      <br />
      <br />
      <Box id="Seguridad">
        <Text
          fontSize="50px"
          marginLeft={{ base: 5, md: "100px" }}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Seguridad
        </Text>
      </Box>
    </Box>
  );
}

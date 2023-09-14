import React from "react";
import NavBar from "./NavBar";
import { Text, Box, Image, Flex } from "@chakra-ui/react";
import CustomText from "./CustomText";

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
          marginTop={{ base: "100px", md: "40px" }}
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
      <Box id="Configuracion-inicial">
        <Text
          fontSize="50px"
          marginLeft={{ base: 5, md: "100px" }}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Configuración
        </Text>
        <br />
        <div>
          <CustomText>
            Lo primero que debemos hacer es descargar nuestro proyecto de
            Symfony; una vez descargado, a los paquetes habituales debemos
            instalar lo siguiente: composer require nelmio/cors-bundle:^2.3;
            Esto nos intalara el paquete "nelmio/cors-bundle": "^2.3", que nos
            va evitar los problemas de CORS y poder configurar la seguridad.
            Para esto, una vez que instalamos nelmio, nuestro archivo
            nelmio_cors.yaml (dentro de packages) debería quedar asi:
          </CustomText>
        </div>
        <br />

        <Box
          border="6px solid"
          borderColor="cyan.700"
          p={8}
          w={440}
          textAlign="left"
          marginLeft="6rem"
        >
          <Text fontSize="m" fontWeight="bold">
            nelmio_cors:
          </Text>
          <Text fontSize="m" fontWeight="bold">
            defaults:
          </Text>
          <Text fontSize="m" fontWeight="bold">
            allow_credentials: true
          </Text>
          <Text fontSize="m" fontWeight="bold">
            allow_origin: [ '*' ]
          </Text>
          <Text fontSize="m" fontWeight="bold">
            allow_headers: [ '*' ]
          </Text>
          <Text fontSize="m" fontWeight="bold">
            allow_methods: [ 'GET', 'POST', 'PUT', 'DELETE' ]
          </Text>
        </Box>
        <br />

        <div>
          <CustomText>
            <Text fontSize="m" fontWeight="bold">
              Luego de configurar Nelmio, debemos instalar WEBPACK ENCORE de
              esta forma:
            </Text>
            <br />
            <Text fontSize="m" fontWeight="bold">
              composer require symfony/webpack-encore-bundle
            </Text>
            <br />
            <Text fontSize="m" fontWeight="bold">
              Posteriormente, creamos un controlador para renderizar los
              componentes{" "}
            </Text>
            <Text fontSize="m" fontWeight="bold">
              (es decir, en este controlador vamos a renderizar el punto de
              entrada de nuestra app, ya se app.js o main.jsx, etc).{" "}
            </Text>
            <Text fontSize="m" fontWeight="bold">
              php bin/console make:controller DefaultController
              <br />
              <br />
              <br />
              <Text fontSize="xl" fontWeight="bold" textDecoration="underline">
                {" "}
                EJEMPLOS:{" "}
              </Text>
              <br />
              <Text fontSize="m" fontWeight="bold"></Text>class
              DefaultController extends AbstractController
            </Text>

            <Text fontSize="m" fontWeight="bold">
              {" "}
              /**
            </Text>
            <Text fontSize="m" fontWeight="bold">
              {" "}
              * @Route ("/reactRouting", name="home", defaults="reactRouting":
              null )
            </Text>
            <Text fontSize="m" fontWeight="bold">
              {" "}
              */
            </Text>
            <Text fontSize="m" fontWeight="bold">
              {" "}
              public function index()
            </Text>

            <Text fontSize="m" fontWeight="bold">
              {" "}
              return $this- render ('default/index.html.twig');
            </Text>

            <Text fontSize="m" fontWeight="bold">
              Aclaración: reactRouting va entre llaves; "reactRouting": null va
              entre llaves;{" "}
            </Text>
            <Text fontSize="m" fontWeight="bold">
              El resto es como cualquier controlador de symfony (se omiten las
              llaves ya que React no permite comentar código PHP){" "}
            </Text>
            <br />
            <br />
            <Text textDecoration="underline" fontSize="22px">
              Así debemos hacer todas las rutas que tengamos en nuestro
              proyecto; quedaría de esta forma:
            </Text>

            <br />

            <Text>
              /** * @Route("/reactRouting", name="app_home",
              defaults="reactRouting": null) */ public function
              home($reactRouting): Response return
              $this-render('default/home.html.twig');
            </Text>
            <br />

            <Text>
              /** * @Route("/agentes/reactRouting", name="app_agentes",
              defaults="reactRouting": null) */ public function
              agentes($reactRouting): Response return
              $this-render('default/home.html.twig');
            </Text>
            <br />

            <Text>
              /** * @Route("/agentes/agente/reactRouting",
              name="app_detalle_agentes", defaults="reactRouting": null) */
              public function detalle_agentes($reactRouting): Response return
              $this-render('default/home.html.twig');
            </Text>
            <br />

            <Text>
              /** * @Route("/operativos/reactRouting", name="app_operativos",
              defaults="reactRouting": null) */ public function operativo():
              Response return $this-render('default/home.html.twig');
            </Text>
            <br />

            <Text>
              /** * @Route("/honorarios/reactRouting", name="app_honorarios",
              defaults="reactRouting": null) */ public function honorario():
              Response return $this-render('default/home.html.twig');
            </Text>
            <br />

            <Text>
              /** * @Route("/modulos/reactRouting", name="app_modulos",
              defaults="reactRouting": null) */ public function modulo():
              Response return $this-render('default/home.html.twig');
            </Text>
            <br />

            <Text>
              /** * @Route("/ordenes/reactRouting", name="app_ordenes",
              defaults="reactRouting": null) */ public function ordenes():
              Response return $this-render('default/home.html.twig');
            </Text>
            <br />

            <Text>
              /** * @Route("/ordenes/ver-ordenes/reactRouting",
              name="app_ver_ordenes", defaults="reactRouting": null) */ public
              function verOrdenes(): Response return
              $this-render('default/home.html.twig');
            </Text>
          </CustomText>
        </div>
      </Box>
      <br />
      <br />
      <br />

      <Box id="integracion">
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
          Formas de uso de ambas tecnologías
        </Text>
        <br />
        <br />

        <br />
        <br />
      </Box>
      <Box id="corsyseguridad">
        <Text
          fontSize="50px"
          marginLeft={{ base: 5, md: "100px" }}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Cors y Seguridad
        </Text>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{ base: 5, md: "100px" }}
        >
          Paquete Nelmio CORS
        </Text>
        <br />
        <br />
      </Box>

      <br />
      <br />
      <Box id="webpack">
        <Text
          fontSize="50px"
          marginLeft={{ base: 5, md: "100px" }}
          fontWeight="bold"
          textDecoration="underline"
          textDecorationColor="cyan.700"
        >
          Webpack
        </Text>
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{ base: 5, md: "100px" }}
        >
          Compilación de React en Symfony
        </Text>
      </Box>
    </Box>
  );
}

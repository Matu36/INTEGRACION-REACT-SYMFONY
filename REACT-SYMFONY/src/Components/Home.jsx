import React from "react";
import NavBar from "./NavBar";
import { Text, Box, Flex } from "@chakra-ui/react";
import CustomText from "./CustomText";
import ImagesCarrousel from "./Carrousel";

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
              width: "100%",

              justifyContent: "center",
              marginLeft: "10px",
            },
            maxWidth: "100%",
          }}
        >
          Integrando Symfony con React
        </Text>
        <ImagesCarrousel />
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

        <Text
          fontSize="22px"
          fontWeight="bold"
          color="yellow.300"
          marginLeft={{ base: "1rem", md: "3rem" }}
        >
          Un mismo proyecto, dos repositorios distintos
        </Text>
        <br />
        <div>
          <CustomText>
            <Text>
              Antes que nada, queremos describir como fue la forma en la que
              trabajamos:
            </Text>
            <br />
            <Text>
              Por un lado desarrollábamos nuestro proyecto en el Backend
              (symfony), y por el otro lado en el Frontend (react)
            </Text>
            <Text>
              Dentro del ámbito ministerial, digamos que agregamos un rama más a
              las que ya existen.
            </Text>
            <Text>
              La rama en la que trabajamos y veíamos todos los cambios en tiempo
              real, llamemosla PRE-LOCAL. Toda la documentación desarrollada
              aquí estará basada en esta rama; posteriormente, en el apartado
              Webpack, se explicará la rama Local y Dev.
            </Text>
            <Text>
              Una vez que teníamos una considerable cantidad de cambios la
              subíamos a la rama LOCAL.
            </Text>
            <br />
            <br />
            <Text textDecoration="underline" fontSize="2rem" color="cyan.700">
              SYMFONY
            </Text>
            <br />
            Lo primero que debemos hacer es descargar nuestro proyecto de
            Symfony; una vez descargado, a los paquetes habituales debemos
            instalar lo siguiente: composer require nelmio/cors-bundle:^2.3;
            Esto nos intalará el paquete "nelmio/cors-bundle": "^2.3", que nos
            va evitar los problemas de CORS (privacidad y/o seguridad entre
            distintos puertos) y poder configurar la seguridad.
          </CustomText>
        </div>
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
            <Text> Acá ya tendríamos la configuración básica de SYMFONY. </Text>
            <br />
            <br />
            <Text textDecoration="underline" fontSize="2rem" color="cyan.700">
              REACT
            </Text>
            <br />
            <Text>Primer paso: </Text>
            <Text>
              Instalamos NODE.JS: https://nodejs.org/es/download; La instalación
              de Node automáticamente nos agregará la variable de entorno;
              Debemos reiniciar nuestro editor de Texto y ya estaríamos listos
              para usar NODE.{" "}
            </Text>
            <Text>
              En la consola, en nuestro editor de texto, escribimos: npm init
            </Text>
            Para crear nuestro proyecto de React.js usaremos a VITE, que es un
            empaquetador. El comando es: npm create vite@latest
            "nombre-de-mi-proyecto" (esto crea el proyecto)
            <Text>-Acá elegimos a REACT: </Text>
            <br />
            <Text>Project name: … vite-project ? Select a framework:</Text> › -
            Use arrow-keys. Return to submit.
            <Text>Vanilla Vue </Text>
            <Text>❯ React </Text>
            <Text> Preact Lit</Text>
            <Text>Svelte - </Text>
            <br />
            <Text>Acá elegimos el lenguaje:</Text>
            <br />
            Select a variant: › - Use arrow-keys. Return to submit.{" "}
            <Text>❯ JavaScript </Text> <Text> TypeScript </Text>
            <br />
            En la carpeta del proyecto, en nuestro editor de texto, ponemos el
            siguiente comando: - npm install (esto instalará todas las
            dependencias). - npm run dev (esto comenzará a correr el proyecto).
            LISTO -- Ya tenemos nuestro front-end corriendo en el puerto 5173!
            En nuestro proyecto, las dependencias se almacenarán en los
            node_modules y se mostrarán en el package.json.
            <br />
            <br />
            <Text>
              Estas son alguna de las dependencias que usamos en nuestro
              proyecto:
            </Text>
            <br />
            <Text>"@react-pdf/renderer": "^3.1.12", </Text>
            <Text> "@tanstack/react-query": "^4.29.12",</Text>{" "}
            <Text> "@tanstack/react-query-devtools": "^4.29.12", </Text>{" "}
            <Text> "axios": "^1.4.0",</Text> "bootstrap": "^5.3.0",
            <Text>"bootstrap-icons": "^1.10.5", </Text> "moment": "^2.29.4",
            <Text>"numero-a-letras": "^1.0.6", </Text>"react": "^18.2.0",
            <Text>"react-data-table-component": "^7.5.3", </Text>"react-dom":
            "^18.2.0",
            <Text> "react-icons": "^4.9.0", </Text>"react-redux": "^8.0.7",
            <Text>"react-router-dom": "^6.12.1", </Text>"react-select":
            "^5.7.4", "redux":
            <Text>"^4.2.1", "redux-devtools-extension": "^2.13.9", </Text>
            "redux-thunk":
            <Text>"^2.4.2", </Text>"sweetalert2": "^11.7.12"
            <br />
            <br />
            <Text>
              Si quisieramos, por ejemplo, una librería para hacer PDF, en
              google solamente debemos poner react-PDF o npm PDF react, y nos
              deberia aparecer el comando para instalarlo en nuestro proyecto;
              por ejemplo,
            </Text>
            <Text>"@react-pdf/renderer": es: npm i react-pdf </Text>
            <br />
            <Text> Acá ya tendríamos la configuración básica de REACT.</Text>
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

        <CustomText>
          <Text>
            {" "}
            Vamos a explicar con algunos ejemplos como podemos hacer para enviar
            la información{" "}
          </Text>
          <Text> desde SYMFONY y como consumirla desde REACT: </Text>
          <br />
          <Text>
            {" "}
            Particularmente, en SYMFONY, nosotros usamos use
            AbstractFOSRestController;
          </Text>
          <br />
          <Text fontSize="1.5rem"> ¿Cómo lo instalamos? </Text>
          <br />
          <Text> composer require friendsofsymfony/rest-bundle </Text>
          <br />
          <Text>
            Lo importamos así: use
            FOS\RestBundle\Controller\AbstractFOSRestController;
          </Text>
          <br />
          <Text>
            Luego, en routes.yaml, debemos agregar los controladores; por ej:
          </Text>
          <br />
          <Text>
            {" "}
            <Text> agentes: </Text> <Text>type: annotation </Text>{" "}
            <Text>resource: App\Controller\AgentesController</Text>
            prefix: api
          </Text>
          <br />
          <Text>
            Luego, la forma de manejar las funciones, fue moduralizarla en capas
            de abstracción
          </Text>
          <Text> Primero, desarrollando la lógica en el Repository;</Text>
          <Text>Luego, moduralizarla en una función en el Service;</Text>
          <Text>Por último, desarrollar la ruta en el Controller;</Text>
          <br />
          <Text>
            Vamos a mostrar un ejemplo de como manejamos un findAll de una
            Entidad:{" "}
          </Text>
          <Text>
            En este caso, teníamos que traer todos los agentes y lo manejamos
            con un Service y un Controller, ya que no requería demasiada lógica;
          </Text>
          <br />
          <Text fontSize="1.5rem" textDecoration="underline">
            {" "}
            En el Service{" "}
          </Text>
          <br />
          <Text>
            public function getAgentes()
            <Text>$data = $this-agenteRepository-findAll(); </Text>
            <br />
            <Text>$response = [$data, Response::HTTP_OK]; </Text>
            <br />
            <Text>if (count($data) == 0) </Text>
            <br />
            <Text>
              {" "}
              $response = ["msg" = "No hay ningún agente en el sistema",
              Response::HTTP_BAD_REQUEST];{" "}
            </Text>
            <br />
            <Text>return $response; </Text>
            <br />
            <Text fontSize="1.5rem" textDecoration="underline">
              {" "}
              Y así lo hacíamos desde el controlador, el cual debía devolver una
              respuesta json:{" "}
            </Text>
            <br />
            <Text>
              {" "}
              /**
              <Text> * @Rest\Get("/agentes", name="get_agentes") </Text>
              <Text>* @return View </Text>
              <Text>*/ </Text>
              <Text>public function getAgentes(): View </Text>
              <Text>$response = $this-agenteService-getAgentes(); </Text>
              <Text>return $this-view($response[0], $response[1]); </Text>
            </Text>
          </Text>
          <br />
          <Text>
            Bien, ya tenemos el controlador y la ruta que nos envía la data que
            queremos,{" "}
          </Text>
          <br />
          <Text>¿Cómo hacemos ahora para consumirla desde React? </Text>
          <br />

          <Text>import axios from "axios"; </Text>
          <br />
          <Text>export const AgentesAPI = axios.create(LLAVE </Text>
          <Text>
            baseURL: `$LLAVE import.meta.env.VITE_BACKEND_URL LLAVE /agentes`{" "}
          </Text>
          <Text>withCredentials: true, </Text>
          <Text>mode: "cors", </Text>
          <Text>headers: LLAVE </Text>
          <Text>'Access-Control-Allow-Origin': '*', </Text>
          <Text>'allow_methods': ["GET", "POST"], </Text>
          <Text>"Access-Control-Allow-Credentials": true </Text>
          <Text>LLAVE, LLAVE).</Text>
          <br />
          <Text>
            En vez de fetch, utilizamos axios para hacer las llamadas
            asincrónicas;
          </Text>
          <Text>Dentro del .env tenemos configurada nuestra ruta base.</Text>
          <br />
          <Text>
            Eso sería todo; envíamos la información desde Symfony y la
            consumimos desde React;
          </Text>
          <Text>
            De la misma manera, debemos hacer con el resto de los controladores
            y el resto de las rutas.
          </Text>
        </CustomText>
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

        <CustomText>
          <Text>El paquete nelmio se usar para:</Text>
          <Text>
            Documentación de rutas y métodos: El paquete documenta las rutas de
            la API,{" "}
          </Text>
          <Text>
            los métodos HTTP permitidos, los parámetros de solicitud y
            respuesta, los tipos{" "}
          </Text>
          <Text>de datos admitidos y otros detalles relevantes.</Text>
          <br />
          <Text>
            {" "}
            Una vez que instalamos nelmio, nuestro archivo nelmio_cors.yaml
            (dentro de packages) debería quedar asi:{" "}
          </Text>
          <br />
          <br />
          <Box
            border="6px solid"
            borderColor="cyan.700"
            p={8}
            maxW={{ base: "100%", md: "440px" }}
            width="60%"
            textAlign="left"
            marginLeft={{ base: "3rem", md: "3rem" }}
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
          <Text>
            {" "}
            Una vez configurado el paquete nelmio en symfony, ahora debemos
            preparar las llamadas desde el front,{" "}
          </Text>
          <Text>las cuales todas deben tener lo siguiente: </Text>
          <br />
          <Text>withCredentials: true, </Text>
          <Text>mode: "cors", </Text>
          <Text>headers: LLAVE </Text>
          <Text>'Access-Control-Allow-Origin': '*', </Text>
          <Text>'allow_methods': ["GET", "POST"], </Text>
          <Text>"Access-Control-Allow-Credentials": true LLAVE )</Text>
        </CustomText>
        <br />
        <Text>
          {" "}
          En toda llamada que hacemos desde React debemos asegurarnos de enviar
          en los headers{" "}
        </Text>
        <Text>
          {" "}
          que le damos acceso a diferentes métodos, y las credenciales
          establecerlas en TRUE
        </Text>
      </Box>
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

        {/* TODA LA CONFIGURACION DE WEBPACK PARA INTEGRAR AMBOS PROEYCTOS */}
        <br />
        <Box>
          <CustomText>
            <Text fontSize="m" fontWeight="bold">
              Creamos un controlador para renderizar los componentes
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
                EJEMPLOS:
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
          </CustomText>
        </Box>
      </Box>
    </Box>
  );
}

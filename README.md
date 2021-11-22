# Web Service

<img src="./imgs/start-screen.png" alt="start_screen"/>

## Descripción

Este es el proyecto final realizado durante la etapa de Labs de <strong>Henry</strong>. El mismo consiste en un E-Commerce, donde se pueden ofrecer o adquirir servicios. El proyecto se llevo a cabo junto a un equipo de a 8 integrantes. Algunas de las caracteristicas principales del proyecto: Metodos de pago, Chat Online/Offline, Panel de Usuario, Filtrados, Panel de Admin.

## Integrantes

- <a href="https://github.com/claudioCMW"><img width="20px" src="./imgs/github-logo.png"/></a> <a href="https://www.linkedin.com/in/claudio-wusinowski-2884641a3/"><img width="20px" src="./imgs/linkedin-logo.png"/></a> Claudio Miguel Wusinowski
- <a href="https://github.com/Facupelli"><img width="20px" src="./imgs/github-logo.png"/></a> <a href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/"><img width="20px" src="./imgs/linkedin-logo.png"/></a> Facundo Pellicer
- <a href="https://github.com/Fedex159"><img width="20px" src="./imgs/github-logo.png"/></a> <a href="https://www.linkedin.com/in/federico-avelin-dev/"><img width="20px" src="./imgs/linkedin-logo.png"/></a> Federico Avelin
- <a href="https://github.com/Franco1312"><img width="20px" src="./imgs/github-logo.png"/></a> <a href="https://www.linkedin.com/in/franco-kail-219259215/"><img width="20px" src="./imgs/linkedin-logo.png"/></a> Franco Kail
- <a href="https://github.com/jonatansegovia"><img width="20px" src="./imgs/github-logo.png"/></a> <a href="https://www.linkedin.com/in/jonatan-segovia-dev/"><img width="20px" src="./imgs/linkedin-logo.png"/></a> Jonatan Segovia
- <a href="https://github.com/wikonarider"><img width="20px" src="./imgs/github-logo.png"/></a> <a href="https://www.linkedin.com/in/micaela-montero-295141217/"><img width="20px" src="./imgs/linkedin-logo.png"/></a> Micaela Montero
- <a href="https://github.com/stobar93"><img width="20px" src="./imgs/github-logo.png"/></a> <a href="https://www.linkedin.com/in/sebastiantobar-fullstack-dev/"><img width="20px" src="./imgs/linkedin-logo.png"/></a> Sebastian Tobar
- <a href="https://github.com/valentinjara27"><img width="20px" src="./imgs/github-logo.png"/></a> <a href="https://www.linkedin.com/in/valentin-jara-fullstackdeveloper/"><img width="20px" src="./imgs/linkedin-logo.png"/></a> Valentin Jara

## Dependencias utilizadas

- Express 4.17.1
- Node 12.21
- NPM 7.20.3
- React 17.0.1
- Redux 4.1.1

Y muchas más dependencias, consultar los package.json de la ruta <a href="https://github.com/Fedex159/pf-web-service/blob/main/api/package.json">/api</a> y <a href="https://github.com/Fedex159/pf-web-service/blob/main/client/package.json">/client</a>.

## Instrucciones para utilizar el proyecto

- Clonar o forkear el repositorio

### Configurando la DB

Crear un archivo <strong>.env</strong> en la carpeta <strong>/api</strong> con los sigs parámetros:

```bash
DB_NAME = "nombre base de datos"
DB_USER = "usuario de postgres"
DB_PASSWORD = "contraseña de postgres"
DB_HOST = "localhost"
ENV_VARIABLE = "1(valor del force de sequelize, 1 === true o 0 === false)"
ORIGIN = "http://localhost:3000"
SUCCESS_MERCADOPAGO = "http://localhost:3001"
SECRET_KEY = "key para encriptar el token, puede ser cualquier string"
```

Una vez creado y configurado el <strong>.env</strong>, hacer npm install parado en el directorio <strong>/api</strong>.

Para ejecutar el servidor, utilizar <strong>npm start</strong> (solo node), o <strong>npm run start:dev</strong> (con nodemon).

### Configurando el front

Para el front no se requiere de configuraciones adicionales. Parado en la carpeta <strong>/client</strong>, realizar <strong>npm install</strong>.

Para poner en linea el servidor del front, utilizar <strong>npm start</strong> (la primera vez puede tardar un rato).

## Presentación y funcionalidades

### Landing

<img src="./imgs/landing.gif" alt="landing_gif"/>

Landing page, se muestra el logo de la aplicacion, cuenta con animaciones, 2 cards principales, una lleva al Home de la web, el otro te lleva a un formulario de registro y acceso al Login en la parte superior derecha.

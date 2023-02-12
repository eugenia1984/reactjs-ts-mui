- Acá junto un poco de la teoría aprendida.

---

:tv: VIDEO 1

---

## :star: INSTALACIONES NECESARIAS:


1) Inicializamos el proyecto con **create-react-app** con **TS**:

```npx create-react-app marketplace --template typescript```

2) Instalamos **reeact-router-dom** con la versión 6:

```npm install react-router-dom@6```

3) Instalamos **Material UI**, el framework de estilos:

```npm install @mui/material @emotion/react @emotion/styled @mui/icons-material```

---

## :star: ORDENAMOS EL PROYECTO:

```
> src
    > api
    > assets
    > common
    > components
        > Card
        > Header
        > Notification
    > config
    > context
    > pages
        > home
            > interface
        > login
    > types 
    > utils 
Router.tsx     
```

- **pages** para renderizar componentes acorde a la página a mostrar, acorde al sistema de rutas.

- **common** donde estarán los componenes comunes o comprtidos

- **config** tendrá el archivo del theme provider con la configuración de los estilos personalizados

- **context** con las notificacines y demás cosas para manejar de manera global.

- **utils** funcionalidades lógicas, también se llaman **utils**

- **types** para declarar los tipos

- **assets** para guardar imagenes y todo lo que se necesite.

- **components** para los componentes que se pueden reutilizar, y no son comunes

---

:tv: VIDEO 2

---

## :star: THEME PROVIDER 

### Customización de estilos

[En la web de Material UI](https://mui.com/material-ui/customization/theming/)

```TypeScript
const theme = createTheme({
    status: {
        danger: orange[500],
    },
});
```

Nos brinda un PROVIDER al cual le pasamos un STORE, el cual es un objeto que da todoa la configuración de estilos, permitiendo personalizar(customizar) los componentes.

- En la carpeta **config** creo **theme.congi.tsx.**:

```TypeSCript
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

type ThemeProp = { // es un PROVIDER
    children: JSX.Element
};

export enum themePalette { // guardo en enum mis colores, como usar var en CSS
    BG = "#12181b",
    LIME = "#C8FA5F",
    FONT_GLOBAL =  "'JetBrains Mono', monospace",
}


const theme = createTheme({ // es una funcion de Material UI
    palette:{ // para el dark mode
        mode:"dark",
        background: {
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.LIME, // para sacar el azul que trae por defecto
        },
    },
    typography: { // cambio la letra
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: { // para customizar el boton componente de Mterial UI
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                }
            }
        }
    },
});

// FC : Function Component
export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
         {/* El provider*/}
        <ThemeProvider theme={theme}>
            {/* Componente de configracion, me permite pasar mi theme */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
```
- Y en **index.txs** agrego ```<ThemeConfig>``` así ya se aplica a toda la app.

---

:tv: VIDEO 3

---

## :star: NAVBAR

- Cremaos el componente común NavBar, que aparece en varias de las páginas, salvo en el Login, manejando con rutas se hace en un solo componente y se renderiza en varias.

### Demostración con rutas

Creamos rutas que permitan proveer lauout estático en nuestra aplicación.

Crear:

- **Router.tsx** que nos permita hacer el manejo de rutas.

- Importar el manejo de rutas de nuestro componente App.

- Crear uun componnete **RouterLayout.sx** que nos permita manejar rutas junto a componentes estáticos.

Router.tsx:
```TypeScript
export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                {/* Todas las paginas que se rendericen aca adentro comparten el layout*/}
                {/* Asi aca comparto el NavBar, Header, Footer, por ejemplo */}
                <Route path="/" element={<HomePage />} />
            </Route>   
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}
```

App.tsx:
```TypeScript
function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
```

Router.Layout.tsx:
```TypeScript
export const RouterLayout: React.FC<{}> = () => {
    return(
        <>
            <NavBar />
            <Outlet /> {/* Componente de React Router DOM*/}
        </>
    )
}
```

---

:tv: VIDEO 4

---

## :star: LOGIN Y TEXT FIELDS

Crearemos una página de **login** donde:

- Acomodamos los componentes con **Container** y **Grid**.

- Creamos campos requeridos en los text fields (es un textarea de una sola línea).

- Creamos un objeto de información con email y contraseña a través de un estado que se ejecute con el submit del formulario. En este caso solo lo vamos a mandar para ver por consola, no lo mandamos a un BackEnd

---

:tv: VIDEO 5

## Context API y useNotification

- Cutomizar el **Alert**.

- Crear un componente llamado **CustomSnackBar** el cual implementaremos nuestras notificaciones personalizadas.

- Crear nuestro **provider**  probarlo.

---

:tv: VIDEO 6

## Yo
p
- Para instalarlo:
```
npm install yup
```

---

:tv: VIDEO 7

## Header Component

- Crear un componente **HeaderComponent**.

- Que reciba tres parámetros, dos obligatorios y uno opcional.

- El opcional debe ser un componente.

---

:tv: VIDEO 8

## Rick and Morty API

- Crear instancia de **axios**.

```
npm install axios
```

- Obtener los datos por consola.

- Diagramar los datos.


---

:tv: VIDEO 9

- Crear el componente Card

---

## :stars: Material UI

- Componentes vistos:

```
<NavBar />
<Button />
<Typography />
```

- Para los mensajes de alerta:
```
<Snackbar />
<Alert />
```

- Para el layout:

```
<Box />
<Container />
<Grid />
<Stack />
```

```
<Paper />
```

- Para forms:

```
<Box component="form"></Box>
<TextField />
<Button type="submit" />
```

- Para las cards:
```
<Card />
<CardMedia />
<CardContent />
<CardActions />
```


---
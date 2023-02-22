- Acá junto un poco de la teoría aprendida.

---

:tv: VIDEO 1

---

## :star: INSTALACIONES NECESARIAS:

1. Inicializamos el proyecto con **create-react-app** con **TS**:

`npx create-react-app marketplace --template typescript`

2. Instalamos **reeact-router-dom** con la versión 6:

`npm install react-router-dom@6`

3. Instalamos **Material UI**, el framework de estilos:

`npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`

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

- Y en **index.txs** agrego `<ThemeConfig>` así ya se aplica a toda la app.

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

- Crear nuestro **provider** probarlo.

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

:tv: VIDEO 10

- Agrego la **paginación** en la parte de las cards de los personajes, ya que la API nos da 20 personajes por página.

---

:tv: VIDEO 11

- Página específica del personaje.

Es como la página del detalle del producto en un e-commerce.

- Hook **useParams** de **react-router-dom**. Al definir una ruta se pasa el parametro con :adelante y al hacer el llamado se lo utiliza.

```JSX
<Route path="/character/:id" element={ <CharacterPage /> } />
```

---

:tv: VIDEO 12

- Agrego la navegación con el **hook**: **useNavigate** para navegar a la ruta que necesitamos asi al hacer click en el botón de ver más entro al detalle del personaje.

---

:tv: VIDEO 13

### Redux

Antes un componente padre se comunicaba con su hijo.

Luego aparecio **context** a través de la implementación de **providers**, pero cada provider nuevo debe ser declarado.

En cambio ahora con **redux** y **redux toolkit** podemos tener un único **store**(una única fuente de verdad)

Un ejemplo:

![image](https://user-images.githubusercontent.com/72580574/220625500-14072f75-40a6-494a-a649-eda1c091859a.png)

Hay un **botón** que manda un **evento** con $10.

Ese **evento** entra en el **dispatch** y manda una **acción** con un **payload** a un **reduce**.

EL **store** lo escucha y modifica el estado de ese reduce.

El nuevo estado, modificado en la UI se re renderiza.

ESCUCHA UNA ACCIÓN -> MODIFICA UN ESTADO

Trabajamos con diferentes reducers, pero solo modifica uno.

- ¿Cómo lo implementamos en el código?

Sumando items al carrito.

ItemCard -> Boton para agregar la carrito -> dispatch para el reducer en el store

Selector -> escucha lo que hace el store, el selector del carrito:

-cuenta la cantidad de items en el card

-cambia el boton de activado a desctivado

-ver en un componente de carrito los elementos agregados

- Tareas a realizar:

-Método para agregar al carrito (sin pisar ni resetear la lista del estado)

-Método para remover del carrito (sin pisar ni resetear la lista del estado)

-Método para contar la cantidad de items agregados al carrito.

-Deshabilitar botón de "agregar al carrito" cuando se agregue el elemento.

Pasos:

1. Crear el store

2. Diagramar y armar el slice cart

3. Los hooks para TypeScript

4. Inicializar al store con un provider

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

- Para la paginación:

```
<Pagination />
```

- Para el loading:

```
<CircularProgress />
```

---

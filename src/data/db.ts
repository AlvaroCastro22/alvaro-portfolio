import { Info, ProyectType } from "../types";

export type DbProps = {
    info: Info[]
    proyect: ProyectType[]
}
export const db:DbProps = {
    info: [{
        id:1,
        titulo:"Creacion y desarollo de diseños UX",
        descripcion:"Uso de conceptos UX y buenas practicas para conseguir un diseño amigable al usuario y que cumpla las exigencias del cliente",
        tags:["Figma","UX/UI"],
        imagen:"/images/ux.png"
    },
    {
        id:2,
        titulo:"Programacion Web",
        descripcion:"Uso de lenguajes de programación mas usados, y sus librerías, para la creación de paginas web responsivas usando código y hipertexto",
        tags:["HTML/CSS","Javascript","TypeScript","React","PHP","Laravel","Tailwind","MySql"],
        imagen:"/images/desarrollo.png"
    },
    {
        id:3,
        titulo:"Trabajo en Equipo y en base a Resultados",
        descripcion:"Experiencia en trabajos en equipo con metodología SCRUM, completado de tickets de desarrollo y de manejo de versiones",
        tags:["Git","Github","Jira"],
        imagen:"/images/teamwork2.jpeg"
    }],
    proyect: [
        {id:1,
        categoria:"Profesional",
        titulo:"Girasoles Hotel Website",
        descripcion:"Proyecto creado usando PHP, Laravel, Tailwind y Msql, conformado por un dashboard para edicion del sitio web y de vistas separadas por paginas. Proyecto realizado en equipo donde resalta las animaciones y la funcionalidad del sitio web",
        link:"https://losgirasoleshotel.com/public/",
        secondLink:"https://www.figma.com/design/2U2WQXbiHemgC5Xwpognmy/Girasoles?node-id=0-1&t=HKtukUmYCJ5RwUMO-1",
        imagen:"/images/proyecto 1.png"
        },
        {id:2,
        categoria:"Personal"
        ,titulo:"Contador Calorias React"
        ,descripcion:"Proyecto creado en React, usando Typescript y Tailwind. Este proyecto cuenta con un formulario donde puede agregar la actividad o comida y la cantidad de calorias que consume o gasta, y muestra la diferencia calorica. Este proyecto uso conceptos como useReducer y useEffect de React, y types de TypeScript."
        ,link:"string"
        ,secondLink:""
        ,imagen:"/images/proyecto 2.png"
    },
        {id:3,
        categoria:"Profesional",
        titulo:"Poket.me Website",
        descripcion:"Proyecto Realizado en equipo usando AlpineJs, Tailwind, Laravel, Livewire y MySQL. Consta de una herramienta que permite agrupar varios links en uno solo y dar temas personalizados, donde resalta el diseño y maquetado de la pagina web. Se uso relaciones entre tablas de bases de datos.",
        link:"https://poket.me/",
        secondLink:"https://www.figma.com/design/srPcYCgmmnylh77lcKKXLp/pantalla-poketme?node-id=35-11&t=w9YxGjcdcXreMw3s-1",
        imagen:"/images/proyecto 3.png"
        },
        {id:4,
        categoria:"Personal"
        ,titulo:"Tienda de Guitarras"
        ,descripcion:"Proyecto realizado con React, TypeScript y Tailwind, al estilo MarketPlace de una tienda de Guitarras que permite escoger items al carrito de la pagina, aumentar la cantidad y calcular el total a pagar. Se usaron conceptos avanzados como Custom Hooks y Functional Components y useReducer para manejar el estado del proyecto."
        ,link:"string"
        ,secondLink:""
        ,imagen:"/images/proyecto 4.png"}]
}

const datosPersonales = [
    {
        nombre: "Luis",
        apellido: "Franco",
        edad: 29,
        altura: "175cm",
        eresDesarrollador: true,
    }
];    

const prop = "edad";
console.log(datosPersonales[0][prop]);

const datosAmigos = [
    {
        nombre: "Jose",
        apellido: "Zambrano",
        edad: 30,
        altura: "177cm",
        eresDesarrollador: true,  
    },
    {
    nombre: "Carla",
    apellido: "Suarez",
    edad: 28,
    altura: "167cm",
    eresDesarrollador: false,
    },
]


const listaDatos = [...datosPersonales, ...datosAmigos];
console.log(listaDatos);

listaDatos.sort((a, b) => a.edad - b.edad);
console.log(listaDatos);

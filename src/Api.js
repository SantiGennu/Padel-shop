import head from "./assets/head.jpg"
class productos {
    constructor(nombre, modelo, precio, img, id, stock) {

        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio
        this.img = img;
        this.id = id;
        this.stock = stock
    }
}
const listaPaletas = [
    new productos("Head", "Alpha Pro", 80000, "./head.jpg", 1, 5),
    new productos("Adidas", "Match 2.0", 85000, "./paleta.jpg", 2, 7),
    new productos("Wilson", "Bela", 90000, "./wilson.jpg", 3, 2),
    new productos("Bullpadel", "Vertex03", 92000, "./bullpadel.jpg", 4, 12),
    new productos("Dunlop", "Aero star", 82000, "./dunlop.jpg", 5, 8),
    new productos("Nox", "Tempo WPT", 90500, "./nox.jpg", 6, 3),
    new productos("Siux", "Spyder", 92300, "./siux.jpg", 7, 9),
    new productos("Volt", "500", 78300, "./volt.png", 8, 10),
]

export const getProductos = () => {

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaPaletas)
        }, 2000)
    });
    return task;
}
export const getItem = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve
            ({
                nombre: "Head",
                modelo: "Alpha Pro",
                descripcion: "La Head Graphene Touch Alpha Pro es la pala de potencia con la que sentirás la sensación de tener un guante en la mano y podrás jugar muy fácil. Pala del jugador profesional Sanyo Gutiérrez. GRAPHENEXT FLEXIBLE CHASSIS en el tubular de la pala para lograr una unión más suave con la goma y obtener así un mayor confort y punto dulce.",
                precio: 80000,
                img: head,
                id: 1,
                stock: 8

            })
    }, 2000)

});



class productos {
    constructor(nombre, modelo, precio, img, id) {

        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio
        this.img = img;
        this.id = id;
    }
}
const listaPaletas = [
    new productos("Head", "Alpha Pro", 80000, "./head.jpg", 1),
    new productos("Adidas", "Match 2.0", 85000, "./paleta.jpg", 2),
    new productos("Wilson", "Bela", 90000, "./wilson.jpg", 3),
    new productos("Bullpadel", "Vertex03", 92000, "./bullpadel.jpg", 4),
    new productos("Dunlop", "Aero star", 82000, "./dunlop.jpg", 5),
    new productos("Nox", "Tempo WPT", 90500, "./nox.jpg", 6),
    new productos("Siux", "Spyder", 92300, "./siux.jpg", 7),
    new productos("Volt", "500", 78300, "./volt.png", 8),
]

export const getProductos = () => {

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaPaletas)
        }, 2000)
    });
    return task;
}



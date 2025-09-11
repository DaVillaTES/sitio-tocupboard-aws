exports.handler = async (event) => {
    const productos = [
        { id: 1, nombre: "Camiseta Nike", precio: 60.50 },
        { id: 2, nombre: "Camisa Manga Larga EL", precio: 35.20 },
        { id: 3, nombre: "Blue Jeans Tomy Hilfiger", precio: 70.50 },
        { id: 4, nombre: "Pantalon de Tela INDIE", precio: 55.50 },
        { id: 5, nombre: "Abrigo Puma para Hombre", precio: 75.99 },
        { id: 6, nombre: "Abrigo Adidas para Mujer", precio: 88.00 },
    ];

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productos)
    };
};
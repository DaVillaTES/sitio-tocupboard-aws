exports.handler = async (event) => {
    const productos = [
        { id: 1, nombre: "Camiseta Nike", precio: 60.50, imagen: "/wp-content/uploads/2025/09/camiseta1.png" },
        { id: 2, nombre: "Camisa Manga Larga EL", precio: 35.20, imagen: "/wp-content/uploads/2025/09/camiseta2.png" },
        { id: 3, nombre: "Blue Jeans Tomy Hilfiger", precio: 70.50, imagen: "/wp-content/uploads/2025/09/bluejean.png" },
        { id: 4, nombre: "Pantalon de Tela INDIE", precio: 55.50, imagen: "/wp-content/uploads/2025/09/tela.png" },
        { id: 5, nombre: "Abrigo Puma para Hombre", precio: 75.99, imagen: "/wp-content/uploads/2025/09/abrigo1.png" },
        { id: 6, nombre: "Abrigo Adidas para Mujer", precio: 88.00, imagen: "/wp-content/uploads/2025/09/abrigo2.png" },
    ];

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productos)
    };
};
exports.handler = async (event) => {
    const productos = [
        { id: 1, nombre: "Arroz 5kg", precio: 10.5 },
        { id: 2, nombre: "Aceite 1L", precio: 3.2 },
        { id: 3, nombre: "Papel Higiénico (12 rollos)", precio: 7.5 }
    ];

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productos)
    };
};
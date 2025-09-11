exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    const nombre = body.nombre;
    const correo = body.correo;
    const mensaje = body.mensaje;

    // Aquí solo simulamos que lo guardamos en BD
    const respuesta = {
        status: "ok",
        mensaje: `Formulario recibido de ${nombre}, correo: ${correo}`
    };

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(respuesta)
    };
};
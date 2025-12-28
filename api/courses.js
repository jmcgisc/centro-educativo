export default function handler(req, res) {
    const info = {
        talleresOnline: {
            duracion: "8 horas (4 sesiones de 2h)",
            costo: "$2,900 MXN",
            opcionesPago: "4 pagos de $725",
            plataforma: "Zoom"
        },
        retiroAnual: {
            duracion: "4 días",
            ubicación: "Bosque",
            incluye: "Hospedaje, comidas, cuadernillo"
        }
    };
    res.status(200).json(info);
}
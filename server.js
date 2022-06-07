const express = require('express')
const app = express()
const PORT = 8000 // puerto de prueba
const cors = require('cors')

app.use(cors()) // para que cualquier persona pueda acceder al API desde un ambiente local

const tea = {
    'manzanilla': {
        "nombre": "Manzanilla",
        'descripcion': "Rico en antioxidantes y bueno para la inflamacion",
        'origen': 'china',
        'notas': "Temperatura de 80 grados durante dos minutos"

    },
    'jamaica': {
        "nombre": "Jamaica",
        'descripcion': "Fresco para dias caluros, buen diuretico",
        'origen': 'Africa',
        'notas': "Mejor tomado frio con azucar"

    },
    'verde': {
        "nombre": "Verde",
        'descripcion': "rico en antioxidantes y bueno para la inflamacion",
        'origen': 'Japon',
        'notas': "Temperatura de 80 grados durante 3 minutos"

    },
    'desconocido': {
        "nombre": "Desconocido",
        'descripcion': "Desconocida",
        'origen': 'Sin Origen',
        'notas': "Porfavro manda un correo a tes-api@gmail.com para mandar sugerencias"

    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:tes', (request, response) => {
    const nombreTe = (request.params.tes.toLowerCase());
    if (tea[nombreTe]) {
        response.json(tea[nombreTe])
    } else {
        response.json(tea['desconocido'])

    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log("thr port is working in 8000");
})
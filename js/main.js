document.querySelector('button').addEventListener('click', apiTeRequest)

async function apiTeRequest() {
    const teSeleccionado = document.querySelector('input').value
    console.log(teSeleccionado);
    try {
        //const response = await fetch(`https://rapper-api-estern.herokuapp.com/api/${rapperName}`)
        const response = await fetch(`https://api-te.herokuapp.com/api/${teSeleccionado}`)
        console.log(response);
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.descripcion
    } catch (error) {
        console.log(error)
    }
}
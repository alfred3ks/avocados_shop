// Conexion con la API:
const url = 'https://platzi-avo.vercel.app/api/avo';

// Web api usando fetch
// conectarnos al servidor usando promesas
window
    .fetch(url)
    // procesar la respuesta y convertirla en JSON
    .then(respuesta => respuesta.json())
    // JSON -> Data -> renderizar info en browser
    .then((responseJson) => {

        // Creamos un array para meter los container
        const todosLosItems = [];

        // console.log(responseJson);
        // Para obtener los elementos hacemos un ciclo
        responseJson.data.forEach(item => {
            // console.log(item);
            // console.log(item.name);
            // Creamos los items:
            const image = document.createElement('img');
            const title = document.createElement('h2');
            const price = document.createElement('div');
            

            // Creamos un contenedor para image,title,price
            const container = document.createElement('div');
            container.append(image, title, price);

            // Metemos todo en el array
            todosLosItems.push(container);

        });
        // Agregamos el container al body
        document.body.append(...todosLosItems);
    });


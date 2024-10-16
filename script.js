// Lamamos a los elementos que estan en HTML en donde se presentaran las const
const userList = document.getElementById('list');
const spinner = document.getElementById('spinner');

// Función para cargar una página de usuarios
function loadPage(page) {
    // visualizacion del spinner
    spinner.style.display = 'block';
    userList.innerHTML = '';

    // Llamada a la API usando fetch
    fetch(`https://reqres.in/api/users?delay=3&page=${page}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Ocultamos el spinner
            spinner.style.display = 'none';

            // Iterar sobre los usuarios y agregarlos al DOM dentro de la tabla
            data.data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td>${user.email}</td>
                    <td><img src="${user.avatar}" alt="${user.first_name}" width="50" height="50"></td>
                `;
                userList.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            spinner.style.display = 'none';
        });
}
loadPage(1);


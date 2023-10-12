
const url = 'https://api.github.com/users';
const main = document.getElementById('main')
let text = ''

document.getElementById('userInput').addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getUser();
    }

})

function getUser(user) {

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            text += `<p>${data.name} possui ${data.public_repos} repositórios públicos no Github como ${data.login}</p>`
            main.innerHTML = text
        })
        .catch((error) => console.error('Erro:', error.message || error))
}



const url = 'https://api.github.com/users';
const userList = document.getElementById('userList');
let text = ''

function getUser(user) {

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            text += `<p>${data.name}<br> Possui ${data.public_repos} repositórios públicos no GitHub como ${data.login}</p>`
            userList.innerHTML = text
        })
        .catch((error) => console.error('Erro: ', error.message || error))

}

document.getElementById('searchInput').addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        const username = e.target.value.trim();
        if (username !== '') {
            getUser(username);
        }
    }
});



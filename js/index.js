
async function getUsers(username) {
    const userListElement = document.getElementById('userList');
    const url = `https://api.github.com/search/users?q=${username}+in:login`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            userListElement.innerHTML = '';

            data.items.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.login;
                userListElement.appendChild(listItem);
            });
        } else {
            throw new Error('Erro ao buscar usernames');
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

document.getElementById('searchInput').addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        const username = e.target.value.trim();
        if (username !== '') {
            getUsers(username);
        }
    }
});

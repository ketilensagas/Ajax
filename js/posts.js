
let _data = {
    title: "nesciunt quas odio",
    body: "qui est esse",
    userId: 1
}

const postContainer = document.getElementById('posts')
let postMarkup = ''
let postLength = 0

//Cadastrar um novo post
fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: JSON.stringify(_data),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

//Solicita todos os posts
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/', {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
            postLength = data.length
            console.log(postLength)
        })
        .catch(error => console.error(error))
}
//Solicita um post por ID
function getPost(id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(post => {
            postMarkup += `
        <div class="posts-item" id="post-${post.id}">
             <h3>${post.title}</h3>
             <p>${post.body}</p>
        </div>
        `
            postContainer.innerHTML = postMarkup
        })
        .catch(error => console.error(error))
}

let postIndex = 1;
getPosts()
getPost(postIndex)

const loadPost = document.getElementById('loadPost')

loadPost.addEventListener('click', function (e) {
    if (postIndex < postLength)
        getPost(postIndex += 1)

})
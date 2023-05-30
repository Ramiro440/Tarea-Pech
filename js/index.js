const users = document.querySelector("#users")
const user = document.querySelectorAll(".user")
const countuser = document.querySelector("#countuser")
const showuser = document.querySelector("#showuser")

users.style.display = "none"
countuser.innerHTML = user.length
showuser.addEventListener("click",function(){
    users.style.display = "grid"
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(json=>{
        let template =``
    json.forEach(element => {
        template +=`
        <div id="users">
            <h2>${element.name}</h2>
            <h3>${element.username}</h3>
            <p>${element.email}</p>
        </div>`
        
    });
    users.innerHTML = template  
})


const todos = document.querySelector("#todos")
const todo = document.querySelectorAll(".todo")
const countodo = document.querySelector("#countodo")
const showtodo = document.querySelector("#showtodo")

todos.style.display = "none"
countodo.innerHTML = todo.length
showtodo.addEventListener("click",function(){
    todos.style.display = "grid"
})

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json=>{
        let template =``
    json.forEach(element => {
        template +=`
        <div id="todo">
            <h2>${element.id}</h2>
            <h3>${element.title}</h3>
            <p>${element.completed}</p>
        </div>`
    })
    todos.innerHTML = template
})


const albums = document.querySelector("#albums")
const album = document.querySelectorAll(".album")
const countalbum = document.querySelector("#countalbum")
const showalbum = document.querySelector("#showalbum")

albums.style.display = "none"
countalbum.innerHTML = album.length
showalbum.addEventListener("click",function(){
    albums.style.display = "grid"
})

fetch("https://jsonplaceholder.typicode.com/albums")
.then(response => response.json())
.then(json=>{
        let template =``
    json.forEach(element => {
        template +=`
        <div id="album">
            <h2>${element.userId}</h2>
            <h3>${element.id}</h3>
            <p>${element.title}</p>
        </div>`
    })
    albums.innerHTML = template
})


const posts = document.querySelector("#posts")
const post = document.querySelectorAll(".post")
const countpost = document.querySelector("#countpost")
const showpost = document.querySelector("#showpost")

posts.style.display = "none"
countpost.innerHTML = post.length
showpost.addEventListener("click",function(){
    posts.style.display = "grid"
})

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(json=>{
        let template =``
    json.forEach(element => {
        template +=`
        <div id="post">
            <h2>${element.id}</h2>
            <h3>${element.title}</h3>
            <p>${element.body}</p>
        </div>`
        
    });
    posts.innerHTML = template  
})
const addPost = document.querySelector('.js-add');
const listPosts = document.querySelector('.js-post');
const formWrapper = document.querySelector('.js-form');
const errMessage = document.querySelector('.js-error');

addPost.addEventListener('click', handlerAddPost);

function handlerAddPost() {
    formWrapper.innerHTML = `<form action="submit" class="js-form-add">
    <input type="text" name="title">
    <textarea name="body" cols="30" rows="10"></textarea>
    <button>Add post</button>
</form>`
    
    const form = document.querySelector('.js-form-add');
    form.addEventListener("submit", handlerFormSubmit);
};

function handlerFormSubmit(evt) {
    evt.preventDefault();
    console.dir(evt.currentTarget.elements);
    const { title, body } = evt.currentTarget.elements;
    const data = {
        title: title.value,
        body: body.value,
    };
    addPostService(data)
        .then((obj) => {
            console.dir(obj);
            listPosts.insertAdjacentHTML("beforeend", createPostMarkup(obj));
        })
        .catch(() => {
            errMessage.innerHTML = 'Impossible to add a post'
        })
        .finally(() => {
            formWrapper.innerHTML = "";
            setTimeout(() => {
                errMessage.innerHTML = '';
            }, 3000);
        });
};

function createPostMarkup({ id, title, body }) {
    return `<li data-id="${id}">
    <h2>${title}</h2>
    <p>${body}</p>
</li>`
};

function addPostService(data) {
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    };
    return fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then((resp) => {
            console.dir(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText);
            };
            return resp.json();
        });
};
//DOM
var task = document.getElementById('task')
var list = document.getElementById('list')
var toastNotice = document.querySelector('.toast')
var closeNotice = document.querySelector('.close-toast')
var noticeMessage = document.querySelector('.toast-body')
let todos = []

function getFromLocalStorage() {
    let saved = localStorage.getItem("TODOS")
    if (saved) {
        todos = JSON.parse(localStorage.getItem("TODOS"))
        createList(todos)
    }
}

getFromLocalStorage()

// ADDING
function newElement() {
    if(task.value === ""){
        showNotice("Listeye boş ekleme yapamazsınız!");
    }
    else{
        const todo = {
            num : todos.length,
            todo : task.value,
            completed: false
        }
        todos.push(todo)
        addLocalStorage(todos)
        showNotice("Ekleme işlemi başarı ile gerçekleşmiştir.")

        // clear input value
        task.value = "";
    }
}

function addLocalStorage(todos) {
    localStorage.setItem('TODOS', JSON.stringify(todos))
    createList(todos)
}

function createList(todos){
    list.innerHTML = ''
    todos.forEach(element => {
        // create list element
        var li = document.createElement("li");
        li.setAttribute('num', element.num)
        li.textContent=element.todo;

        var span = document.createElement("span");
        span.textContent = "x";
        span.className = "close";

        if (element.completed === true) {
            li.classList.add("isChecked")
        }
        else if (element.completed === false) {
            li.classList.remove("isChecked")
        }

        list.appendChild(li);
        li.appendChild(span);
    });
}
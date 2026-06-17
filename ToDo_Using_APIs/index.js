let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('.addBtn');
let todoContainer = document.querySelector('.todoContainer');

let API = 'https://6a325716c6ca2aee4384dd53.mockapi.io/api/Todo/todos';

addBtn.addEventListener('click',PostData);

async function fetchData() {
    let response = await fetch(API);
    let data = await response.json();

    if(data){
        todoContainer.innerHTML='';
        data.forEach(element => {

            let div = document.createElement('div');
            div.className = 'todo'
            div.innerHTML = `
                <p class='paraText'>${element.Text}</p>
                <div>
                    <button class='deleteBtn'>Delete</button>
                    <button class='editBtn'>Edit</button>
                    <button class='saveBtn'>Save</button>
                    <input class='check' type="checkbox" ${element.checkBox === "checked" ? "checked" : ""} />
                </div>
            `

            let deleteBtn = div.querySelector('.deleteBtn')
            let editBtn = div.querySelector('.editBtn')
            let saveBtn = div.querySelector('.saveBtn')
            let paraText = div.querySelector('.paraText')
            let editInput = div.querySelector('#editInput')

            deleteBtn.addEventListener('click', function(){
                DeleteData(element.id);
            });

            todoContainer.append(div);
        });
    }
}

async function PostData(){
    let value = taskInput.value.toUpperCase();
    console.log(value);

    let objData = {
        Text: value.trim(),
        checkBox: "checked",
    }

    let response = await fetch(API,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData),
    })

    if (response.status === 201) {
        fetchData();
        taskInput.value = '';
    }
}

async function DeleteData(id){
    let response = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    });
    fetchData();
}

fetchData();

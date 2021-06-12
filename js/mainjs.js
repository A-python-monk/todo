const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todolist=document.querySelector('.todo-list');

todoButton.addEventListener('click',addTodo);
todolist.addEventListener('click',deletecheck);



function addTodo(event)
{
    event.preventDefault();

    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo =document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completebutton = document.createElement('button');

    completebutton.classList.add('complete-button');
    todoDiv.appendChild(completebutton);

    const deletebutton = document.createElement('button');
    deletebutton.innerHTML='<i class="fas fa-trash"> </i>' ; 
    deletebutton.classList.add('delete-button');
    todoDiv.appendChild(deletebutton);
    todolist.appendChild(todoDiv)
    todoInput.value="";
}

function deletecheck(e)
{
    const item=e.target;
    if(item.classList[0]==="delete-button")
    {
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0]==="complete-button")
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

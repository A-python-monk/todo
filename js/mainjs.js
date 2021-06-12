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

    const buttonDiv=document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    const newTodo =document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completebutton = document.createElement('button');

    completebutton.innerHTML='<i class="fas fa-check"> </i>' ; 
    completebutton.classList.add('complete-button');

    //added this
    buttonDiv.appendChild(completebutton);
    // todoDiv.appendChild(completebutton);

    const deletebutton = document.createElement('button');
    deletebutton.innerHTML='<i class="fas fa-trash"> </i>' ; 
    deletebutton.classList.add('delete-button');

    //added this
    buttonDiv.appendChild(deletebutton);
    // todoDiv.appendChild(deletebutton);


    todoDiv.appendChild(buttonDiv) //added this 
    
    
    todolist.appendChild(todoDiv)
    todoInput.value="";
}

function deletecheck(e)
{
    const item=e.target;
    console.log(item);
    if(item.classList[0]==="delete-button")
    {
        const todo = item.parentElement;
        const mainDiv=todo.parentElement;
        mainDiv.remove();
    }

    if(item.classList[0]==="complete-button")
    {
        const todo = item.parentElement;
        const mainDiv=todo.parentElement;
        mainDiv.classList.toggle('completed');
    }

}
function addtask() {
    const input = document.getElementById('tf-input');
    const inputvalue = input.value;

    const task = document.createElement('li');
    task.textContent = inputvalue;
    task.classList.add('listitem');
    task.id = new Date().valueOf().toString() + Math.random().toString(36).substring(2,7);

    const editbutton = document.createElement('button');
    editbutton.textContent = 'edit';
    editbutton.classList.add('edit');
    editbutton.addEventListener('click', function(){
        edittask(task.id);
    });
    
    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'delete';
    deletebutton.classList.add('deletebutton');
    deletebutton.addEventListener('click', function(){
        deletetask(task.id);
    });

    task.appendChild(editbutton);
    task.appendChild(deletebutton);
    const taskcontainer = document.getElementById('task_container');
    taskcontainer.appendChild(task);
    input.value = '';
}

function deletetask(id){
    const task = document.getElementById(id);
    task.remove(id);
}

function edittask(id) {
    const task = document.getElementById(id);
    const input = document.getElementById('tf-input');
    const addButton = document.querySelector('.addbutton');

    if (task) {
        input.value = task.firstChild.textContent;
        editingTaskId = id;
        addButton.textContent = 'Edit Task';
        task.remove(id);
    }
}

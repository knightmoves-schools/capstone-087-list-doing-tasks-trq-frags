let tasks = [
    {description: 'pack spikes for track meet', status: 'todo'}, 
    {description: 'make my bed', status: 'todo'}, 
    {description: 'walk the dog', status: 'todo'},
    {description: 'write draft english paper', status: 'doing'},
    {description: 'sanding art project', status: 'doing'}];
            
function drawCard(index, task){
    return `<div id="task-${index}" class="card">
        <div class="task-menu">
            <div class="menu-bar  ${task.status}">...</div>
            <ul class="task-menu-items">
                <li><a href="/edit/${index}">Edit</a></li>
                <li><a href="/delete/${index}">Delete</a></li>
            </ul>
        </div>
        ${task.description}
    </div>`
}

function drawTodoCards(){
    let output = '';
    
    tasks.forEach((task, index) => {
        if(task.status === 'todo'){
            output += drawCard(index, task)
        }
    });
    
    return output;
}

function drawDoingCards(){
    let output = '';
    
    tasks.forEach((task, index) => {
        if(task.status === 'doing'){
            output += drawCard(index, task)
        }
    });
    
    return output;
}

function drawDoneCards(){
    let output = '';
    
    tasks.forEach((task, index) => {
        if(task.status === 'done'){
            output += drawCard(index, task)
        }
    });
    
    return output;
}

document.getElementById('todo-cards').innerHTML = drawTodoCards();
document.getElementById('doing-cards').innerHTML = drawDoingCards();
document.getElementById('done-cards').innerHTML = drawDoneCards();

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('task-description').value;
    const status = document.getElementById('task-status').value;
    tasks.push({description: description, status: status});
    document.getElementById('task-description').value = '';
    document.getElementById('todo-cards').innerHTML = drawTodoCards();
    document.getElementById('doing-cards').innerHTML = drawDoingCards();
    document.getElementById('done-cards').innerHTML = drawDoneCards();
});

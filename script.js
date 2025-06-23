let container = document.getElementById('allTasks');
let inputBox = document.getElementById('inputfield');

function clicked(){
    if(inputBox.value === '')alert('Enter a task');
    else{
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        container.appendChild(li);
        inputBox.value='';
        saveData()

        let span = document.createElement('span');
        span.innerHTML ='\u00d7';
        li.appendChild(span);

    }
    
}

function del(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }

    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }

}

container.addEventListener('click',del,false);

function saveData(){
    localStorage.setItem('dataAll',container.innerHTML);
}

function showtasks(){
    container.innerHTML = localStorage.getItem('dataAll');
}

showtasks(); 
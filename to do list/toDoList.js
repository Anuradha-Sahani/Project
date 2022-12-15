document.querySelector('#btn').onclick = function(){
    if(document.querySelector('#inputBox input').value.length == 0){
        alert("Please Enter a Task")
    }

else{
    document.querySelector('#list').innerHTML+=`
    <div class="task">
    <label id="taskname">
    ${document.querySelector('#inputBox input').value}
    </label>
    <button class="delete">
    delete
                    <i class="far fa-trash-alt"></i>
                </button>
    </div>
    `;
    var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }


    }
}
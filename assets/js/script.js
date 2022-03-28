const m = moment().format('LT');
var inputEl = $('input');


var taskFormHandler = function(event) {
    event.preventDefault();
    var taskInput = document.querySelector("input[name='task-name'").value;
  
    // check if inputs are empty (validate)
    if (taskNameInput === "" || taskTypeInput === "") {
      alert("You need to fill out the task form!");
      return false;
    }
    
    inputEl.reset();
  
    // reset form fields for next task to be entered
    document.querySelector("input[name='task-name']").value = "";
    document.querySelector("select[name='task-type']").selectedIndex = 0;
  
    var taskDataObj = {
      name: taskNameInput      
    };
  
    createTaskEl(taskDataObj);
};


// var taskContainerEl = $('task-container');
// var inputContainerEl = $('input-container');
// var saveBtnEl = $('save');

// var showInput = function(event) {
//     event.preventDefault();
//     inputContainerEl.show();
//     alert('adsg')
// }

// $(function(){
    
//     console.log(m)
//     inputContainerEl.hide();
//     inputEl.hide();
//     saveBtnEl.on('click', showInput())
   

//     taskContainerEl.on('click', 'span', function(){
//        console.log('hello worldd')
//     });
// }); 


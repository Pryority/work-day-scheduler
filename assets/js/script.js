let taskDiv = $('#task-div');
let saveDiv = $('#save-div');
let saveBtn = $('#save-button');
let textarea = $('#task-textarea');
let textareaDiv = $('#task-textarea-div');
let presentDate = $('#present-date');
let saved = false;

taskDiv.on('click', () => {
  textareaDiv.hide();
  textarea.show().focus();
  saveTask();
});

saveTask = () => {
  // do nothing if there isn't any value (text) within the textarea
  // if (!textarea.value) {
  //   return
  // }
  // console.log('saving task')
  // if there IS some value in the textarea, 
  // set the textarea value to be a local storage item

};

saveDiv.on('click', saveBtn, console.log('sat'));
textarea.hide();
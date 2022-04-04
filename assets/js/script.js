let taskDiv = $('#task-div');
let saveBtn = $('save-button');
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
  if (!textarea.value) {
    return
  }
  // if there IS some value in the textarea, 
  // set the textarea value to be a local storage item

};

saveBtn.on('click', saveTask);
textarea.hide();
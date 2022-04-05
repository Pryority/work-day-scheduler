
// current date
var dateContainer = $('#date-container')
var newDate = new Date('01/12/2016');
var date = "<p>" + newDate + "</p>";
var currentDate = $(date);

currentDate.attr('id', 'date');
currentDate.addClass('justify-center');
dateContainer.append(date);

// hour text (9:00, 10:00 ...)
var hourContainer = $('#hour-container')
var hourDiv = $('#hour-div');
var hourText = '<div>' + moment().hour() + '</div>';
$(hourText).attr('hour-text')
$(hourText).addClass('text-right flex-end items-center')
hourDiv.append(hourText);
hourContainer.append(hourDiv);

// task section
var taskInput = $('task-input');
var task = $('#task-input');

var taskSection = $('#task-section');
var taskList = document.createElement('ul');

taskSection.on('click', () => {
  taskInput.show()
});

// save section
let saveBtn = $('#save-button');
let saveDiv = $('#save-div');
let saved = false;

saveTask = () => {
  // add task to task list
  let aBlock = document.createElement('ul').appendChild(document.createElement('p'));
};

saveBtn.on('click', () => {
  if (!task.value) {
    console.log('needs task')

  }
  saveTask();
  console.log('saving task')
});

// current date desired format
// moment().format('dddd MMMM Do');
// current hour desired format
// moment().format('LT');   // 10:12 AM
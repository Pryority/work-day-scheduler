let DateTime = luxon.DateTime;

let dateContainer = $('#date-container');
let today = DateTime.local().toLocaleString(DateTime.DATETIME_MED);
let currentDateEl = document.createElement('p');
$(currentDateEl).attr('current-date')
$(currentDateEl).addClass('text-center text-xl font-black')
currentDateEl.innerHTML = today;
dateContainer.append(currentDateEl);
// currentDateText = today;

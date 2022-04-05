let DateTime = luxon.DateTime;
let dtl = DateTime.local();
let today = DateTime.local().toLocaleString(DateTime.DATETIME_MED);

let dateContainer = $('#date-container');
let currentDateEl = document.createElement('p');
$(currentDateEl).attr('current-date')
$(currentDateEl).addClass('text-center text-xl font-black')
currentDateEl.innerHTML = today;
dateContainer.append(currentDateEl);

setStart = () => {
  dtl.set({ hour: 9 }).hour;
};
console.log(dayStart);

let hourContainer = $('#hour-container');
let hourEl = document.createElement('p');

for (var i = 0; i < 9; i++) {
  $(hourEl).attr('hour');
  $(hourEl).addClass('text-right flex-end items-center bg-yellow-400');
  hourEl.innerHTML = (i + 1) + ':00';
}



function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDays() {
  let daysList = document.querySelector('#days');
  for(let days of decemberDaysList) {
    let day = days;
    let dayItem =   document.createElement('li');
    dayItem.innerHTML = day;
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      daysList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day === 18) {
       dayItem.className = 'day friday';
       daysList.appendChild(dayItem);
      } else if (day === 25) {
       dayItem.className = 'day holiday friday';
       daysList.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        daysList.appendChild(dayItem);
      }
  }
}

createDays  ();

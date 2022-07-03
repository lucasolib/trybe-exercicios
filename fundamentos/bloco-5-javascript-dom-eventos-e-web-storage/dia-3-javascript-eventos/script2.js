let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let changedHoliday = false;
let feriados = document.getElementsByClassName('holiday');
let changedFriday = false;
let sextou = document.getElementsByClassName('friday');

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
createDays();

function buttonHoliday(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.setAttribute('id', 'btn-holiday');
  button.innerHTML = buttonName;
  buttonContainer.appendChild(button);
}
buttonHoliday('Feriados');

document.querySelector('#btn-holiday').addEventListener("click", function(){
  if(changedHoliday === false){
    for (let feriado of feriados) {
      feriado.style.backgroundColor = '#036B52';
      feriado.style.color = 'white';
    }
  changedHoliday = true;
  } else if (changedHoliday === true) {
    for (let feriado of feriados) {
      feriado.style.backgroundColor = '#eee'
      feriado.style.color = "#777777"
    }
  changedHoliday = false;
}
})

function buttonFriday(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.setAttribute('id', 'btn-friday');
  button.innerHTML = buttonName;
  buttonContainer.appendChild(button);
}
buttonFriday('Sexta-feira')


document.querySelector('#btn-friday').addEventListener("click", function(){
  if(changedFriday === false) {
    for (let sexta of sextou) {
      sexta.innerText = 'Sextou!'
    }
    changedFriday = true;
  } else {
    document.getElementsByClassName('friday')[0].innerText = '4';
    document.getElementsByClassName('friday')[1].innerText = '11';
    document.getElementsByClassName('friday')[2].innerText = '18';
    document.getElementsByClassName('friday')[3].innerText = '25';
    changedFriday = false;
  }
})


days.addEventListener('mouseover', function(event){
  event.target.style.fontSize = '40px';
  event.target.style.fontweight = '900';
});

days.addEventListener('mouseout', function(event){
  event.target.style.fontSize = '20px';
  event.target.style.fontweight = '200';
});

function myTasks(task){
  let tasks = document.querySelector('.my-tasks');
  let myTask = document.createElement('span');
  myTask.innerText = task;
  tasks.appendChild(myTask);
}
myTasks('cozinhar');

function taskColor(color){
  let taskContainer = document.querySelector('.my-tasks');
  let taskColor = document.createElement('div');
  taskColor.className = 'task';
  taskColor.style.backgroundColor = color;
  taskContainer.appendChild(taskColor);
}
taskColor('red');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}
setDayColor();

function myCommitments() {
  
}
/* <div class="input-container">
<h3>COMPROMISSOS</h3>
<label for="task-input">Novo:</label>
<input type="text"
  id="task-input"
  placeholder="Escreva seu compromisso"
>
<button id="btn-add">Adicionar</button> */
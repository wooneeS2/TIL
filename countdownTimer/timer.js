const dateString = "2022/07/30 15:55:00";

let days;
let hours;
let minutes;
let sec;

const $counter = document.querySelector(".count");
const $day = document.getElementById("timer-days");
const $hour = document.getElementById("timer-hours");
const $minute = document.getElementById("timer-minute");
const $second = document.getElementById("timer-seconds");

const $narrowDay = document.getElementById("narrow-timer-days");
const $narrowHours = document.getElementById("narrow-timer-hours");
const $narrowMinutes = document.getElementById("narrow-timer-minute");
const $narrowSecond = document.getElementById("narrow-timer-seconds");

const $narrowTimer = document.getElementById("narrow-timer-background");

const setZero = numbers => {
  if (numbers.toString().length < 2) {
    return "0" + numbers.toString();
  }
  return numbers;
};

function millisecondToDate(ms) {
  days = setZero(Math.floor(ms / (24 * 60 * 60 * 1000)));
  let daysms = ms % (24 * 60 * 60 * 1000);
  hours = setZero(Math.floor(daysms / (60 * 60 * 1000)));
  let hoursms = ms % (60 * 60 * 1000);
  minutes = setZero(Math.floor(hoursms / (60 * 1000)));
  let minutesms = ms % (60 * 1000);
  sec = setZero(Math.floor(minutesms / 1000));
}
setTimes();

function setTimes() {
  let now = new Date();
  let finishDate = new Date(dateString).getTime() + 9 * 60 * 60 * 1000;
  let today = now.getTime() + 9 * 60 * 60 * 1000;
  let diffDate = finishDate - today;
  millisecondToDate(diffDate);
}

function setTimerElement() {
  $day.innerHTML = days;
  $hour.innerHTML = hours;
  $minute.innerHTML = minutes;
  $second.innerHTML = sec;
}

function setNarrowTimerElement() {
  $narrowDay.innerHTML = days;
  $narrowHours.innerHTML = hours;
  $narrowMinutes.innerHTML = minutes;
  $narrowSecond.innerHTML = sec;
}

let isMain = true;
setTimes();

const counter = ($counter, max) => {
  if (max < 10) {
    max = max * 10;
  }
  let now = max;

  const handle = setInterval(() => {
    $counter.innerHTML = Math.ceil(max - now);

    if (now < 3) {
      clearInterval(handle);
      const count = setInterval(() => {
        setTimes();
        if (isMain) {
          setTimerElement();
        } else {
          setNarrowTimerElement();
        }
        setNarrowTimerElement();
      }, 1000);
    }

    const step = now / 10;

    now -= step;
  }, 50);
};

window.onload = () => {
  if (isMain) {
    setTimeout(() => counter($day, days), 500);
    setTimeout(() => counter($hour, hours), 500);
    setTimeout(() => counter($minute, minutes), 500);
    setTimeout(() => counter($second, sec), 500);
  } else {
    setTimeout(() => counter($narrowDay, days), 500);
    setTimeout(() => counter($narrowHours, hours), 500);
    setTimeout(() => counter($narrowMinutes, minutes), 500);
  }
};

function isMainScreen(element) {
  isMain = true;
  let nowAdress = window.location.href.toString();

  if (
    nowAdress == "http://127.0.0.1:5500/" ||
    nowAdress == "http://127.0.0.1:5500/index.html"
  ) {
    // element.style.display = "none";
  } else {
    isMain = false;
  }
}

isMainScreen($narrowTimer);

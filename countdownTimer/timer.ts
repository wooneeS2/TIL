const dateString: string = "2022/07/30 14:00:00";

let days: string;
let hours: string;
let minutes: string;
let sec: string;

const $day: HTMLElement | null = document.getElementById("timer-days");
const $hour: HTMLElement | null = document.getElementById("timer-hours");
const $minute: HTMLElement | null = document.getElementById("timer-minute");
const $second: HTMLElement | null = document.getElementById("timer-seconds");

const setZero = (numbers: number): string => {
  if (numbers.toString().length < 2) {
    return "0" + numbers.toString();
  }
  return numbers.toString();
};

function millisecondToDate(ms: number): void {
  days = setZero(Math.floor(ms / (24 * 60 * 60 * 1000)));
  let daysms = ms % (24 * 60 * 60 * 1000);
  hours = setZero(Math.floor(daysms / (60 * 60 * 1000)));
  let hoursms = ms % (60 * 60 * 1000);
  minutes = setZero(Math.floor(hoursms / (60 * 1000)));
  let minutesms = ms % (60 * 1000);
  sec = setZero(Math.floor(minutesms / 1000));
}

function setTimes(): void {
  let now: Date = new Date();
  let finishDate: number = new Date(dateString).getTime() + 9 * 60 * 60 * 1000;
  let today: number = now.getTime() + 9 * 60 * 60 * 1000;
  let diffDate: number = finishDate - today;
  millisecondToDate(diffDate);
}

setTimes();
function setTimerElement(): void {
  (<HTMLElement>$day).innerHTML = days;
  ($hour as HTMLElement).innerHTML = hours;
  (<HTMLElement>$minute).innerHTML = minutes;
  ($second as HTMLElement).innerHTML = sec;
}

const counter = ($counter: HTMLElement, max: number): void => {
  if (max < 10) {
    max = max * 10;
  }
  let now = max;

  const handle = setInterval(() => {
    ($counter as HTMLElement).innerHTML = Math.ceil(max - now).toString();

    if (now < 3) {
      clearInterval(handle);
      const count = setInterval(() => {
        setTimes();
        setTimerElement();
      }, 1000);
    }

    const step: number = now / 10;

    now -= step;
  }, 50);
};
window.onload = () => {
  setTimeout(() => counter(<HTMLElement>$day, parseInt(days)), 100);
  setTimeout(() => counter(<HTMLElement>$hour, parseInt(hours)), 500);
  setTimeout(() => counter(<HTMLElement>$minute, parseInt(minutes)), 500);
  setTimeout(() => counter(<HTMLElement>$second, parseInt(sec)), 500);
};

export {};

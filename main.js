let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

const body = document.body;
const countdownDiv = document.querySelector(".countdown-container");
const titleElement = document.querySelector(".title");

let countDown = () => {
  let futureDate = new Date("20 Dec 2023 02:30");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  if (days == 1 && hours == 9 && min == 55 && sec == 0) {
    console.log(titleElement);
    body.style.backgroundImage = 'url("images/pic2.jpeg")';
    countdownDiv.style.display = "none";
    titleElement.textContent = "AND THEY MET!!!";
  }

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};

countDown();
setInterval(countDown, 1000);

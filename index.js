$(document).ready(function(){
let timeDisplayed = document.querySelector("#currentDay");
let time = moment().format('MMMM Do YYYY');
console.log(time);

function currentTime() {
    timeDisplayed.append(time);
}
currentTime();
})

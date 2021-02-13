$(document).ready(function(){
    // I created a variable called timeDisplay to grab the id in the HTML file
let timeDisplayed = document.querySelector("#currentDay");
// I created a variable that holds the moment js time information 
let time = moment().format('MMMM Do YYYY');
// I console the time variable to make sure that it works.
console.log(time);

let currentHour = moment().format('LT');
console.log(currentHour)
// A function was created to grab the time variable and place inside of the currentDay id 
function currentTime() {
    timeDisplayed.append(time);
}
// I called the function on line 14
currentTime();

if (currentHour <= "9:00 PM"){
    console.log("color green")
}else{
    console.log("wonk")
}


// for the past, present, and future time block
// I am going to create a conditional


})

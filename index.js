$(document).ready(function (event) {
    // I created a variable called timeDisplay to grab the id in the HTML file
    let timeDisplayed = document.querySelector("#currentDay");
    let hourTwo = document.querySelectorAll('.hour');
    let saveNote = document.querySelectorAll('.saveBtn');
    let responseOne = document.querySelectorAll('.description');
    let button = $('.btn');
    // I created a variable that holds the moment js time information 
    let time = moment().format('MMMM Do YYYY');
    // I console the time variable to make sure that it works.
    console.log(time);
    // let hour = moment().format('LT');
    let currentHour = moment().format('LT');
    console.log(currentHour)
    // A function was created to grab the time variable and place inside of the currentDay id 
    function currentTime() {
        timeDisplayed.append(time);
    }
    // I called the function on line 14
    currentTime();
    console.log(responseOne);

    // I created an onclick function that will save to the localStorage.
    button.on("click", function (event) {
        event.preventDefault();
        let example = $(this).siblings('.description').val();
        console.log(example);
        //    This function is getting what has been stored in the localStorage 
        function getExample() {
            var example = JSON.parse(localStorage.getItem("text"));
            console.log(example)
        };
        // In this section, I am setting and taking in the key of text and storing a variable 
        // which holds the value. The get Example function is being called towards the end of this function
        function setExample() {
            localStorage.setItem("text", JSON.stringify({
                example
            }));
            getExample();


        };

        // let inputBox = localStorage.getItem("text");
        setExample();
        console.log(localStorage);

        // for the past, present, and future time block
        // I am going to create a conditional

        if (currentHour <= "4:00 PM") {
            console.log("Past")
        } else if (currentHour < "4:00 PM") {
            console.log("Present")
        } else if (currentHour => "4:01 PM") {
            console.log("Future")
        }




    })

})



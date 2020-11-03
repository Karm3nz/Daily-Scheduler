//Javascript for Daily Scheduler

// GIVEN I am using a daily planner to create a schedule
//1) 
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
    // WHEN I scroll down
//2)
    // THEN I am presented with time blocks for standard business hours
    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
//3
    // WHEN I click into a time block
    // THEN I can enter an event

//4
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist

// Setting header date, retrieving stored data from local storage
function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        //Saving to local storage
        var schedule = localStorage.getItem(id);
        //For each time block, it will have the respecting scheduled values 
        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

setPlanner();
var saveBtn = $(".saveBtn");

// When save btn is clicked, each time blocks' attributes and values are stored to local storage
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();
    localStorage.setItem(time, schedule);
});

function pastPresentFuture() {
    var currentHour = parseInt(moment().format("HH"));
    // console.log("What is the current hour:", currentHour);

    //Grabbing the hour that each time block represents, we then compare to the current time, to display the correct colour-code on each time block.
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));
        // console.log("what is this", this);
        // console.log("what is this hour", thisHour);

        if (thisHour > currentHour) {
            $(this).addClass("future")
        }
        else if (thisHour === currentHour) {
            $(this).addClass("present");
        }
        else if (thisHour < currentHour){
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();



//ASIDE
//==============================================================================

// function pastPresentFuture() {
//     var hour = time.hours();
//     //Grabbing the hour that each time block represents, we then compare to the current time, to display the correct colour-code on each time block.
//     $(".time-block").each(function () {
//         var thisHour = parseInt($(this).attr("id"));

//         if (thisHour > hour) {
//             $(this).addClass("future")
//         }
//         else if (thisHour === hour) {
//             $(this).addClass("present");
//         }
//         else {
//             $(this).addClass("past");
//         }
//     })
// }

// pastPresentFuture();




// function displayPlanner() {
//     JSON.parse(window.localStorage.getItem(time, schedule));
// };

// // function to display current day at the top of the calendar
// function getCurrentDate(){
//     var currentDate = moment().format('MMMM Do YYYY');
//     $("#currentDay").text(currentDate);
// }
// getCurrentDate();


// // set and get schedules from local storage

// function setSchedule() {

// $(".time-block").each(function () {
//     var id = $(this).attr("id");
//     var schedule = localStorage.getItem(id);

//     if (schedule !== null) {
//         $(this).children(".schedule").val(schedule);
//     }
// });
// }

// setSchedule();


// //Save 
// var saveBtn = $(".saveBtn");

// saveBtn.on("click", function () {
// saveBtn.forEach(function() {
//     saveBtn.addClass("saveBtn i:hover")
// })
// var time = $(this).parent().attr("id");
// var schedule = $(this).siblings(".schedule").val();

// localStorage.setItem(time, schedule);
// });
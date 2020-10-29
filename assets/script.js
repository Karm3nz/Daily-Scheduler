//Javascript for Daily Scheduler

// Steps to execute tasks:
// GIVEN I am using a daily planner to create a schedule
//1) DONE!!!
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


// function to display current day at the top of the calendar
    function getCurrentDate(){
        var currentDate = moment().format('MMMM Do YYYY');
        $("#currentDay").text(currentDate);
    }
    getCurrentDate();


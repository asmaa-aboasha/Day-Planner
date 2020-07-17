// Generating the current date.
$(document).ready(function() {
    var date = $("#currentDay")
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    date.text(todayDate);
});

// Creating an array of time from 9AM to 5PM. 
var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Looping through each time in the array to generate time blocks. 
for (var i = 0; i < timeArr.length; i++) {
    newTimeBlock = $("#9AM").clone();
    newTimeBlock.attr("id", timeArr[i]);
    newTimeBlock.children(".row").attr("style", "white-space: pre-Wrap");
    newTimeBlock.children(".row").children(".hour").text(timeArr[i]);
    newTimeBlock.appendTo(".container");
}; 

// Getting the current time of the day.
var timeOfDay = moment().format("hA");

// Changing time block colors by selecting past/present/future based on current time of day.
var allTimeBlock = $(".time-block");
for (var i = 0; i < allTimeBlock.length; i++) {
    timeBlock = $(allTimeBlock[i]);
    timeBlockId = timeBlock.attr("id");
    timeBlockTextBox = timeBlock.children(".row").children("textarea");
    if (timeBlockId === timeOfDay) {
        timeBlockTextBox.addClass(".present");
    } else if (moment(timeBlockID, "hA").isBefore()) {
        timeBlockTextBox.addClass(".past");
    } else if (moment(timeBlockId, "hA").isAfter()) {
        timeBlockTextBox.addClass(".future");
    }
}

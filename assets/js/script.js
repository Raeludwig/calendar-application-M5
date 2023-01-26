// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//TODO-fix the local storage issue -rs
const saveBtn = document.getElementsByClassName('btn saveBtn col-2 col-md-1');
var textArea =document.getElementsByTagName('text-area')
var eventInfo = [];
localStorage.getItem('Events');
saveBtn.addEventListener('click', (e) =>{
localStorage.setItem("Events", JSON.stringify(eventInfo));
});

$(function () {

  function updateHour() {
    $('.time-block').each(function() {
  // checking the hour of each time block 
      var scheduledHour = parseInt($(this).attr('id').split('-')[1]);
  // setting the class to match if the time block hour is in past, present or future
    if (scheduledHour < currHour) {
      $(this).addClass('past');
    } else if (scheduledHour === currHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
    })
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  // This is the code for the date, it is working and in the right format.
  
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

// var today = moment();
// // reference the whole task (time and textarea)
// var timeBlockEl = document.querySelector('#container');
// // working on getting the color change based on the time
// function colorCodedTime() {
//   // get current number of hours
//   var currentHour = today.hours();

//   // loop over each time block
//   $('.time-block').each(function () {
//     var timeId = parseInt($(this).attr('id').split("hour")[1]);

//     // if the time Id attribute is before the current hour, add the past class
//     if (timeId < currentHour) {
//       $(this).addClass('#past');
//     } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
//     else if (timeId === currentHour) {
//       $(this).removeClass('past');
//       $(this).removeClass('future');
//       $(this).addClass('present');
//     } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
//     else {
//       $(this).removeClass('past');
//       $(this).removeClass('present');
//       $(this).addClass('future');
//     }
//   });
// }
// colorCodedTime();
// setTimeout(function () {
//   // clear the current URL
//   location = ''; // location references the current URL
// }, 1000 * 60);

let currentHour = moment().format("hA");
$(".hour:contains(" + currentHour + ")").addClass("present");

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

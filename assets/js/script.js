
//TODO-fix the local storage issue -rs
const saveBtn = document.getElementsByClassName('btn saveBtn col-2 col-md-1')[0];
var textArea = document.getElementsByTagName('text-area')[0];

//local storage
var eventInfo = JSON.parse(localStorage.getItem('myEvents')) || []; // changing the key name and saving the result
$(".saveBtn").click(function () {
  saveNotes();
});

//current date
var today = dayjs();
$('#currentDay').text(dayjs().format('dddd, MMMM D'));


//changes the color for the blocks
var currHour = parseInt(dayjs().hour());


$('.time-block').each(function () {
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


//save to local storage
function saveNotes() {
  var notes = JSON.parse(localStorage.getItem('myEvents')) || []
  notes.push(textArea.value); // pushing new notes into the array

  localStorage.setItem('myEvents', JSON.stringify(notes))

}
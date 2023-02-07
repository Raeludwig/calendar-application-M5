
//TODO-fix the local storage issue -rs
const saveBtn = document.getElementsByClassName('btn saveBtn col-2 col-md-1');
var textArea = document.getElementsByTagName('text-area')

//local storage
var eventInfo = [];
localStorage.getItem('.events');

$(".saveBtn").click(function () {
 saveNotes()
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
  console.log(typeof (scheduledHour))
})


//save to local storage
function saveNotes() {
  var notes = JSON.parse(localStorage.getItem('textarea')) || []
  notes.push()

  localStorage.setItem('textarea', JSON.stringify(notes))

}
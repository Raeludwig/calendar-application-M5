// Get references to HTML elements
const saveBtns = document.querySelectorAll('.saveBtn');
const textAreas = document.querySelectorAll('textarea');
const currentDayEl = $('#currentDay');
const timeBlocks = $('.time-block');

// Define a function to initialize the app
function init() {
  // Load saved notes from local storage after DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    let savedNotes = loadNotes();
    for (let i = 0; i < textAreas.length; i++) {
      textAreas[i].value = savedNotes[i] || '';
    }
  });

  // Save notes to local storage when button is clicked
  saveBtns.forEach(saveBtn => {
    saveBtn.addEventListener('click', function() {
      saveNotes();
    });
  });

  // Display current date
  const today = dayjs();
  currentDayEl.text(today.format('dddd, MMMM D'));

  // Set color classes for each time block
  const currHour = parseInt(dayjs().hour());
  timeBlocks.each(function () {
    const scheduledHour = parseInt($(this).attr('id').split('-')[1]);
    if (scheduledHour < currHour) {
      $(this).addClass('past');
    } else if (scheduledHour === currHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
}

// Save notes to local storage and return updated savedNotes array
function saveNotes() {
  let savedNotes = [];
  for (let i = 0; i < textAreas.length; i++) {
    savedNotes.push(textAreas[i].value);
  }
  localStorage.setItem('myEvents', JSON.stringify(savedNotes));
}

// Load notes from local storage and return savedNotes array
function loadNotes() {
  return JSON.parse(localStorage.getItem('myEvents')) || [];
}

// Call the init function to start the app
init();

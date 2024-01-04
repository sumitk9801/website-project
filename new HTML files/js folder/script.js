const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calendarTable = document.getElementById("calendar-table");
const calendarBody = document.getElementById("calendar-body");

const markedDates = {}; // Object to store marked dates and comments

function generateCalendar() {
  // Clear any existing table content
  calendarBody.innerHTML = "";

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const firstDayIndex = firstDayOfMonth.getDay();

  // Create table rows and cells
  let row = document.createElement("tr");
  let cell = "";
  let date = 1;

  for (let i = 0; i < 6; i++) {
    row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      cell = document.createElement("td");
      if (i === 0 && j < firstDayIndex) {
        cell.innerHTML = ""; // Empty cells for leading days
      } else if (date > daysInMonth[currentMonth]) {
        break; // Stop when reaching the end of the month
      } else {
        cell.innerHTML = date;
        cell.classList.toggle("marked", markedDates[date]); // Mark the date if it's in the markedDates object
        cell.addEventListener("click", () => handleDateClick(date));
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

function handleDateClick(date) {
  const clickedCell = document.querySelector(`td:contains(${date})`);
  clickedCell.classList.toggle("marked");

  if (markedDates[date]) {
    delete markedDates[date]; // Remove comment if already added
    clickedCell.nextElementSibling.remove(); // Remove comment input
  } else {
    markedDates[date] = ""; // Add comment for the first time
    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.classList.add("comment-input");
    commentInput.addEventListener("blur", () => saveComment(date, commentInput.value));
    clickedCell.insertAdjacentElement("afterend", commentInput);
    commentInput
  }
}  
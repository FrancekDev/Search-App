// Imports
import { lectures } from "./data.js";
import { renderItems } from "./modules/lectureRender.js";
// Variables
const inputSearchEl = document.querySelector(".search");

// Functions that are executed on body load
renderItems(lectures);

// Event listeners
inputSearchEl.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value;

  const filteredResults = lectures.filter((lecture) =>
    lecture.lectureName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  renderItems(
    filteredResults,
    "There are no lessons according to the entered term"
  );
});

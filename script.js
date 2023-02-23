import { lectures } from "./data.js";

console.log(lectures.lectureName);

const inputSearchEl = document.querySelector(".search");

const lectures = new Lectures(lectures);

class player {
  constructor(lectureName, lectureLength) {
    this.title = lectureName;
    this.length = lectureLength;
  }
  getLectureDetails() {
    return `${this.title} ${this.length}`;
  }
}

console.log("player");

const search = function () {
  let filter = inputSearchEl.ariaValueMax.toUpperCase();
};

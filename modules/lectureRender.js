export const renderItems = (lectures, fallbackMessage = "No result") => {
  const girdEl = document.querySelector(".grid");
  const alertEl = document.querySelector(".alert");

  girdEl.innerHTML = "";

  if (lectures.length) {
    alertEl.classList.remove("alert_visible");

    lectures.forEach((lecture) => {
      const cardEl = document.createElement("div");
      cardEl.className = "card";

      const cardTitleEl = document.createElement("h2");
      cardTitleEl.className = "card__title";
      cardTitleEl.innerText = lecture.lectureName;

      const cardLengthEl = document.createElement("p");
      cardLengthEl.className = "card__time";
      cardLengthEl.innerText = `${lecture.lectureLength} min`;

      girdEl.appendChild(cardEl);

      cardEl.appendChild(cardTitleEl);
      cardEl.appendChild(cardLengthEl);
    });
  } else {
    alertEl.classList.add("alert_visible");
    alertEl.innerText = fallbackMessage;
  }

  console.log(girdEl.innerHTML);
};

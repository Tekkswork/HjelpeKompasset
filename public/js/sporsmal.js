
function showMore(id) {
  const answer = document.getElementById(`moreText${id}`);
  const button = document.getElementById(`toggleBtn${id}`);

  if (getComputedStyle(answer).display === "none") {
    answer.style.display = "block";
    button.textContent = "Skjul svar";
  } else {
    answer.style.display = "none";
    button.textContent = "Se svar";
  }
}
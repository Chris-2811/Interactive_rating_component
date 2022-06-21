const submitBtn = document.querySelector(".submit");
const modal = document.querySelector(".card-submitted");

submitBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

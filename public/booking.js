const form = document.getElementById("info");
const detailsModal = document.getElementById("confirmDetailsModal");
const finaliseModal = document.getElementById("confirm-booking");

let date;
let time;
let people;
let email;
let phone;
let comments;

function confirmDetailsModal() {
  detailsModal.querySelector("#date").innerText = date;
  detailsModal.querySelector("#time").innerText = time;
  detailsModal.querySelector("#people").innerText = people;
  detailsModal.querySelector("#email").innerText = email;
  detailsModal.querySelector("#phone").innerText = phone;
  detailsModal.querySelector("#comments").innerText = comments;

  detailsModal.classList.remove("hidden");
}

function openFinaliseModal() {
  detailsModal.classList.add("hidden");
  finaliseModal.classList.remove("hidden");
}

function finalise() {
  finaliseModal.classList.add("hidden");
  console.log("Date:", date);
  console.log("Time:", time);
  console.log("People:", people);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Comments:", comments);
  form.reset();
  date = null;
  time = null;
  people = null;
  email = null;
  phone = null;
  comments = null;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);

  date = formData.get("date");
  time = formData.get("time");
  people = formData.get("people");
  email = formData.get("email");
  phone = formData.get("phone");
  comments = formData.get("comments");

  confirmDetailsModal();
});

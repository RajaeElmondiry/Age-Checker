function ok() {
  const age = Number(document.getElementById("t1").value);
  const popup = document.getElementById("popup");
  const message = document.getElementById("popupMessage");

  if (isNaN(age) || age <= 0) {
    message.textContent = "Please enter a valid age.";
  } else if (age <= 17) {
    message.textContent = "You are not an adult yet.";
  } else if (age <= 49) {
    message.textContent = "You are an adult, but not a senior yet.";
  } else if (age <= 59) {
    message.textContent = "You are a senior, but not retired yet.";
  } else {
    message.textContent = "You are retired. Enjoy your free time!";
  }

  popup.style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function annuler() {
  document.getElementById("t1").value = "";
}

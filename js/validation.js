const formValidation = document.querySelector(".form-validation");
const registerInput = document.querySelectorAll(".register-input");

formValidation.addEventListener("submit", (e) => {
  e.preventDefault();

  let err = 0;

  for (let i = 0; i < registerInput.length; i++) {
    if (registerInput[i].value === "") {
      err++;
    }
  }

  if (err === 0) {
  } else {
    alert("Please fill out all fields.");
    return false;
  }
});

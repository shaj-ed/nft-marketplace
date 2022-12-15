const subForm = document.querySelectorAll(".form");

const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

subForm.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = form.querySelector(".form__input");
    const formMessage = form.querySelector(".form__message");

    emailValidation(emailInput, formMessage);
    emailInput.value = "";
  });
});

// Basic email validation
function emailValidation(emailInput, formMessage) {
  const email = emailInput.value;

  if (email.match(emailformat)) {
    formMessage.classList.remove("show-alert");
    formMessage.classList.add("show");
    formMessage.innerText = "Thanks for your sub & wellcome to the community.";
    setTimeout(() => {
      formMessage.classList.remove("show");
      formMessage.innerText = "";
    }, 3000);
  } else {
    formMessage.classList.add("show-alert");
    formMessage.innerText = "Please enter the right email.";

    setTimeout(() => {
      formMessage.classList.remove("show-alert");
      formMessage.innerText = "";
    }, 3000);
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var desrcInput = document.getElementById("desrc");
      if (validateEmail(emailInput.value)) {
        document.getElementById("emailbox").classList.remove("border-red");

        nameInput.disabled = true;
        emailInput.disabled = true;
        desrcInput.disabled = true;

        var submitButton = document.getElementById("submit");
        var submitBox = document.getElementById("form__submit");

        submitButton.value = "Sent!";
        submitButton.classList.remove("form__input-send");
        submitButton.classList.add("form__input-sent");

        submitBox.classList.remove("form__input-sendbox");
        submitBox.classList.add("form__input-sentbox");
        const name = document.querySelector(".form__name").value;
        const email = document.querySelector(".form__email").value;
        const descr = document.querySelector(".form__message").value;
        nameInput.value = "";
        emailInput.value = "";
        desrcInput.value = "";
        const data = {
          name: name,
          email: email,
          descr: descr,
        };
        const queryParams = new URLSearchParams(data).toString();
        const url = `http://89.116.110.250:3000/send-email?${queryParams}`;
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(
              "There was an error with the fetch operation:",
              error,
            );
          });
      } else {
        document.getElementById("emailbox").classList.add("border-red");
      }
    });
});

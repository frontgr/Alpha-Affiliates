document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");

  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
      popup.style.display = "flex"; // Показываем popup после успешной отправки формы

      const name = document.querySelector(".form__name").value;
      const email = document.querySelector(".form__email").value;
      const descr = document.querySelector(".form__message").value;

      const data = {
        name: name,
        email: email,
        descr: descr,
      };
      const jsonBody = JSON.stringify(data);
      fetch("http://alphaaffiliatescareers.com:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonBody,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Если нужно что-то сделать с ответом от сервера
        })
        .catch((error) => {
          console.error("There was an error with the fetch operation:", error);
        });
    });

  popup.addEventListener("click", function () {
    popup.style.display = "none"; // Закрываем popup при клике на него
  });
});

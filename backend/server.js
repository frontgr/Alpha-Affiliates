const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Разрешить доступ со всех источников
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  ); // Разрешить указанные методы запроса, включая OPTIONS
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Разрешить указанные заголовки
  next();
});

// Обработка OPTIONS запросов
app.options("*", (req, res) => {
  res.status(200).send();
});

app.post("/send-email", async (req, res) => {
  const { name, email, descr } = req.body;

  let transporter = nodemailer.createTransport({
    service: "Gmail", // Используйте ваш почтовый сервис
    auth: {
      user: "nibezo.cs@gmail.com", // Ваш адрес электронной почты
      pass: "", // Ваш пароль для приложения
    },
  });

  try {
    // Отправка электронной почты
    let info = await transporter.sendMail({
      from: "nibezo.cs@gmail.com",
      to: "nibezo.am@gmail.com", // Измените на адрес получателя
      subject: `Сообщение от ${name}`,
      text: `${descr}\n\nEmail отправителя: ${email}`,
    });

    console.log("Отправлено сообщение: %s", info.messageId);
    res.status(200).send("Электронное письмо успешно отправлено!");
  } catch (error) {
    console.error("Произошла ошибка:", error);
    res.status(500).send("Не удалось отправить электронное письмо!");
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Handling OPTIONS requests
app.options("*", (req, res) => {
  res.status(200).send();
});

// Route for sending email via GET request
app.get("/send-email", async (req, res) => {
  const { name, email, descr } = req.query; // Using query parameters instead of request body

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "nibezo.cs@gmail.com",
      pass: "", // ur code is here :)
    },
  });

  try {
    // Sending email
    let info = await transporter.sendMail({
      from: "nibezo.cs@gmail.com",
      to: "nibezo.cs@gmail.com",
      subject: `Message from alphaaffiliatescareers.com ${"by " + name}`,
      text: `Comment:\n\n${descr}\n\nEmail of sender is: ${email}`,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email successfully sent!");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Failed to send email!");
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

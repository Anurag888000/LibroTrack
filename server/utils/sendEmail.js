import nodeMailer from "nodemailer";
console.log("Loading environment variables from config.env file");

export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL,
    to: email,
    subject,
    html: message,
  };
  await transporter.sendMail(mailOptions);
};

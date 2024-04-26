const sgMail = require("@sendgrid/mail");

const sendMail = (mails, subject, message, template) => {
  sgMail.setApiKey(process.env.Mail_Secret);
  const msg = {
    to: mails,
    from: "shubhamsingh801840@gmail.com",
    subject: subject,
    text: message,
  };

  if (template !== " ") {
    msg.html = template;
  }

  sgMail;
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendMail };

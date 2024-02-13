import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    // configure the email service
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.GMAIL_PASSCODE,
    },
  });
  //   compose email message
  const mailOptions = {
    from: "JustADev.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email : http://localhost:${process.env.PORT}/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending verification email", error);
  }
};

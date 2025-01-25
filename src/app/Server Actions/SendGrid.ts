"use server";

interface messageContents {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMessage = async (contents: messageContents) => {
  const msg = {
    to: ["tochi.orams@gmail.com"],
    from: { email: "tochi.orams@gmail.com", name: contents.name },
    replyTo: contents.email,

    subject: `${contents.name} - ${contents.topic} (tochi.dev)`,
    text: `${contents.message}`,
  };

  return new Promise((resolve, reject) => {
    sgMail
      .send(msg)
      .then((response: any) => {
        console.log("status: ", response[0].statusCode);
        console.log("headers: ", response[0].headers);
        resolve(true);
      })
      .catch((error: any) => {
        console.error(error);
        reject(false);
      });
  });
};

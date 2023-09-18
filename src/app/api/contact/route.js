import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request) {
  const { name, email, message } = await request.json();

  const messageObj = {
    from: email,
    to: "mannananxari@gmail.com",
    text: message,
    subject: "Mail Recieved From Mannan's Portfolio!",
    html: `<p>${name} - ${message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mannananxari@gmail.com",
      pass: "iahrusebgtksouxs",
    },
  });

  try {
    let resp = { success: false, message: "" };
    let status = 401;

    let { rejected, accepted } = await transporter.sendMail(messageObj);

    if (rejected.length) {
      resp = {
        success: false,
        message: `Connection refused at ${err.address}`,
      };
    } else {
      resp = {
        success: true,
        message: `Mannan, got your text!`,
      };
      status = 200;
    };

    return NextResponse.json(resp, { status });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

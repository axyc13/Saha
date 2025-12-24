"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendFormEmail(formData: FormData) {
  const topic = formData.get("topic");
  const first = formData.get("firstName");
  const last = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  await resend.emails.send({
    from: "test@saha.co.nz",
    to: "test@saha.co.nz",
    subject: `New message: ${topic}`,
    text: `
      Topic: ${topic}
      First Name: ${first}
      Last Name: ${last}
      Email: ${email}
      Phone: ${phone}
      Message:
      ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>New Contact Form Submission</h2>

      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Name:</strong> ${first} ${last}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>

      <hr />

      <footer style="margin-top: 20px; font-size: 12px; color: #666;">
          Sent from saha.co.nz contact form
      </footer>
      </div>
    `,
  });
}

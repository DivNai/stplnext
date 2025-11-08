// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = req.body;
    console.log("Form data received:", body);

    const {
      firstName = "",
      lastName = "",
      email = "",
      address = "",
      phone = "",
      message = "",
      product = "",
      cv = null,
      source = "",
      role = "",
    } = body;

    // Validate required fields
    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message are required.",
      });
    }

    // ✅ Configure transporter for GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // ✅ Use false for port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ✅ Helps with SSL issues on GoDaddy
      },
    });

    // ✅ Compose the email
    const mailOptions = {
      from: process.env.SMTP_USER, // must match GoDaddy sender
      to: process.env.SMTP_USER,
      subject: "New Submission Details",
      html: `
        <h1>New Inquiry</h1>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
        <p><b>Product:</b> ${product}</p>
        <p><b>Source:</b> ${source}</p>
        <p><b>Role:</b> ${role}</p>
        ${cv ? `<p><b>CV:</b> Attached</p>` : `<p><b>CV:</b> Not Provided</p>`}
      `,
      attachments: cv
        ? [
            {
              filename: cv.filename,
              path: cv.url,
            },
          ]
        : [],
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: `Failed to send email: ${error.message}`,
    });
  }
}

// pages/api/contact.js
import formidable from "formidable";
import fs from "fs";
import { Resend } from "resend";

// Disable Next.js body parsing (needed for file uploads)
export const config = {
  api: {
    bodyParser: false,
  },
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    // Parse form data including files
    const form = formidable({
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Extract values
    const category = fields.category?.[0] || "";
    const firstName = fields.firstName?.[0] || "";
    const lastName = fields.lastName?.[0] || "";
    const email = fields.email?.[0] || "";
    const phone = fields.phone?.[0] || "";
    const message = fields.message?.[0] || "";
    const product = fields.product?.[0] || "";
    const jobRole = fields.jobRole?.[0] || "";
    const heardFrom = fields.heardFrom?.[0] || "";

    const cvFile = files.cvFile?.[0] || null;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: "First name, last name, email, phone, and message are required.",
      });
    }

    // Build email HTML
    let emailContent = `
      <div style="font-family:Arial;max-width:600px;margin:auto">
        <h2 style="color:#7A6CF6;border-bottom:2px solid #7A6CF6;padding-bottom:10px;">
          New ${
            category === "general"
              ? "General Enquiry"
              : category === "review"
              ? "Product Review"
              : "Job Application"
          }
        </h2>

        <div style="background:#f9fafb;padding:20px;border-radius:8px;margin:20px 0">
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>

        <div style="background:#fff;padding:20px;border:1px solid #e5e7eb;border-radius:8px;margin:20px 0">
          <h3>Message</h3>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
    `;

    if (category === "review" && product) {
      emailContent += `
        <div style="background:#fef3c7;padding:15px;border-left:4px solid #f59e0b;border-radius:4px;margin:20px 0">
          <p><strong>Product:</strong> ${product}</p>
        </div>
      `;
    }

    if (category === "work") {
      emailContent += `
        <div style="background:#dbeafe;padding:15px;border-left:4px solid #3b82f6;border-radius:4px;margin:20px 0">
          <p><strong>Job Role:</strong> ${jobRole}</p>
          <p><strong>Heard From:</strong> ${heardFrom}</p>
          ${cvFile ? `<p><strong>CV:</strong> ${cvFile.originalFilename}</p>` : ""}
        </div>
      `;
    }

    emailContent += `</div>`;

    // Handle Attachment
    let attachments = [];

    if (cvFile && cvFile.filepath) {
      const fileBuffer = fs.readFileSync(cvFile.filepath);

      attachments.push({
        filename: cvFile.originalFilename,
        content: fileBuffer.toString("base64"),
      });
    }

    // Send with Resend
    const sendResponse = await resend.emails.send({
      from: "StepLoop Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New ${
        category === "general"
          ? "Enquiry"
          : category === "review"
          ? "Product Review"
          : "Job Application"
      } from ${firstName} ${lastName}`,
      html: emailContent,
      attachments,
    });

    console.log("Resend email response:", sendResponse);

    // Cleanup uploaded file
    if (cvFile?.filepath) {
      fs.unlink(cvFile.filepath, () => {});
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully via Resend!",
    });
  } catch (error) {
    console.error("Resend Email Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "Failed to send email using Resend.",
    });
  }
}

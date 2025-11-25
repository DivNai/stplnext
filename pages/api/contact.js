// pages/api/contact.js
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

// ✅ Disable Next.js body parsing to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    // ✅ Parse form data including files
    const form = formidable({
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // ✅ Extract values (formidable returns arrays)
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

    console.log("Form data received:", { category, firstName, lastName, email, phone });

    // ✅ Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: "First name, last name, email, phone, and message are required.",
      });
    }

    // ✅ Configure transporter for GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // ✅ Build email content based on category
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7A6CF6; border-bottom: 2px solid #7A6CF6; padding-bottom: 10px;">
          New ${category === "general" ? "General Enquiry" : category === "review" ? "Product Review" : "Job Application"}
        </h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #0f172a;">Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>

        <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #0f172a;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
    `;

    // ✅ Add category-specific information
    if (category === "review" && product) {
      emailContent += `
        <div style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Product:</strong> ${product}</p>
        </div>
      `;
    }

    if (category === "work") {
      emailContent += `
        <div style="background: #dbeafe; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Job Role:</strong> ${jobRole}</p>
          <p style="margin: 5px 0;"><strong>Heard From:</strong> ${heardFrom}</p>
          ${cvFile ? `<p style="margin: 5px 0;"><strong>CV:</strong> ${cvFile.originalFilename} (attached)</p>` : ""}
        </div>
      `;
    }

    emailContent += `</div>`;

    // ✅ Prepare attachments
    const attachments = [];
    if (cvFile && cvFile.filepath) {
      attachments.push({
        filename: cvFile.originalFilename || "cv.pdf",
        path: cvFile.filepath,
      });
    }

    // ✅ Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New ${category === "general" ? "Enquiry" : category === "review" ? "Product Review" : "Job Application"} from ${firstName} ${lastName}`,
      html: emailContent,
      attachments: attachments,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    // ✅ Clean up uploaded files
    if (cvFile && cvFile.filepath) {
      fs.unlink(cvFile.filepath, (err) => {
        if (err) console.error("Error deleting temp file:", err);
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to send message. Please try again.",
    });
  }
}
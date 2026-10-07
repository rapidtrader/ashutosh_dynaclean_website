import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getResumeFile(resume) {
  if (!resume || typeof resume === "string") return null;
  if (typeof resume.arrayBuffer !== "function") return null;
  return resume;
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const address = formData.get("address")?.toString().trim() ?? "";
    const jobPost = formData.get("jobPost")?.toString().trim() ?? "";
    const resume = getResumeFile(formData.get("resume"));

    if (!name || !email || !phone || !address || !jobPost || !resume) {
      return new Response(
        JSON.stringify({
          message: "All fields are required and resume must be valid.",
        }),
        { status: 400 }
      );
    }

    const mimeType = resume.type || "application/octet-stream";
    if (mimeType !== "application/pdf") {
      return new Response(
        JSON.stringify({ message: "Only PDF files are allowed." }),
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());
    if (buffer.length > 1048576) {
      return new Response(
        JSON.stringify({ message: "Resume must be under 1MB." }),
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || "contact";
    const smtpPass = process.env.SMTP_PASS || "wVueJ^O.M[FKKz-v";
    const smtpFrom =
      process.env.SMTP_FROM || "contact@dynacleanindustries.com";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.dynacleanindustries.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Dynaclean Careers" <${smtpFrom}>`,
      to: process.env.CAREERS_TO_EMAIL || "hr@dynacleanindustries.com",
      replyTo: email,
      subject: `New Job Application: ${jobPost}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}
Job Post: ${jobPost}`,
      attachments: [
        {
          filename: resume.name || "resume.pdf",
          content: buffer,
          contentType: mimeType,
        },
      ],
    });

    return new Response(
      JSON.stringify({ message: "Application sent successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/careers error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send application. Please try again later.",
      }),
      { status: 500 }
    );
  }
}

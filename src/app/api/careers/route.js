import nodemailer from "nodemailer";
import Busboy from "busboy";
import { Readable } from "stream";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req) {
  console.log("📨 Incoming POST request to /api/careers");

  try {
    const headers = Object.fromEntries(req.headers);
    const contentType = headers["content-type"];

    if (!contentType) {
      throw new Error("Missing Content-Type");
    }

    const busboy = Busboy({ headers });

    const formData = {};
    const fileBuffers = [];

    const parseBusboy = new Promise((resolve, reject) => {
      busboy.on("field", (fieldname, val) => {
        console.log(`📥 Field received: ${fieldname} = ${val}`);
        formData[fieldname] = val;
      });

      // ✅ Modern Busboy usage with `info` object
      busboy.on("file", (fieldname, file, info) => {
        const { filename, encoding, mimeType } = info;
        console.log(
          `📎 File field: ${fieldname}, filename: ${filename}, type: ${mimeType}`
        );

        const fileDataBuffer = [];

        file.on("data", (data) => fileDataBuffer.push(data));

        file.on("end", () => {
          console.log(`📁 File ${filename} read complete.`);
          console.log(
            `DEBUG: mimetype at end event for ${filename}:`,
            mimeType
          );

          fileBuffers.push({
            fieldname,
            filename,
            mimetype: mimeType,
            buffer: Buffer.concat(fileDataBuffer),
          });
        });

        file.on("error", (err) => {
          console.error(`❌ Error reading file ${filename}:`, err);
          reject(err);
        });
      });

      busboy.on("finish", () => {
        console.log("✅ Busboy parsing finished.");
        resolve();
      });

      busboy.on("error", (err) => {
        console.error("❌ Busboy error:", err);
        reject(err);
      });

      // Convert web stream to Node stream
      const nodeStream = new Readable({
        read() {},
      });

      const reader = req.body.getReader();

      function pump() {
        reader
          .read()
          .then(({ done, value }) => {
            if (done) {
              nodeStream.push(null);
              return;
            }
            nodeStream.push(value);
            pump();
          })
          .catch((err) => {
            console.error("❌ Error piping request body:", err);
            nodeStream.emit("error", err);
            reject(err);
          });
      }

      pump();
      nodeStream.pipe(busboy);
    });

    await parseBusboy;

    const resume = fileBuffers.find((f) => f.fieldname === "resume");

    console.log("📝 Collected fields:", formData);
    console.log("📄 Resume file found:", !!resume);

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.jobPost ||
      !resume?.mimetype
    ) {
      console.warn(
        "⚠️ Missing one or more required fields or resume mimetype."
      );
      return new Response(
        JSON.stringify({
          message: "All fields are required and resume must be valid.",
        }),
        {
          status: 400,
        }
      );
    }

    console.log(
      "🔎 Validating resume: type =",
      resume.mimetype,
      ", size =",
      resume.buffer.length
    );

    if (resume.mimetype !== "application/pdf") {
      console.warn("❌ Invalid file type:", resume.mimetype);
      return new Response(
        JSON.stringify({ message: "Only PDF files are allowed." }),
        {
          status: 400,
        }
      );
    }

    if (resume.buffer.length > 1048576) {
      console.warn("❌ Resume file too large:", resume.buffer.length);
      return new Response(
        JSON.stringify({ message: "Resume must be under 1MB." }),
        {
          status: 400,
        }
      );
    }

    // Send Email
    console.log("📧 Setting up transporter...");
    const transporter = nodemailer.createTransport({
      host: "mail.dynacleanindustries.com",
      port: 587,
      secure: false,
      auth: {
        user: "hr",
        pass: "n$dh}1w@)AjYKy_V",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    console.log("🚀 Sending email...");
    await transporter.sendMail({
      from: `"Dynaclean Careers" <hr@dynacleanindustries.com>`,
      to: "hr@dynacleanindustries.com",
      subject: `New Job Application: ${formData.jobPost}`,
      text: `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Job Post: ${formData.jobPost}`,
      attachments: [
        {
          filename: resume.filename,
          content: resume.buffer,
          contentType: resume.mimetype,
        },
      ],
    });

    console.log("✅ Email sent successfully.");
    return new Response(
      JSON.stringify({ message: "Application sent successfully." }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "❌ Error during POST /api/careers:",
      error.message,
      error.stack
    );
    return new Response(
      JSON.stringify({
        message: "Failed to send application. Please try again later.",
      }),
      { status: 500 }
    );
  }
}

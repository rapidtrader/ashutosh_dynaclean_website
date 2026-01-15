import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, product, model, address, msg } = await req.json();

    if (!name || !email || !phone || !product || !model || !address || !msg) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

const transporter = nodemailer.createTransport({
  host: "mail.dynacleanindustries.com",   // ✅ SMTP server
  port: 587,                               // ✅ Port for STARTTLS
  secure: false,                           // ✅ STARTTLS uses `secure: false`
  auth: {
    user: "service@dynacleanindustries.com",  // ✅ Your email
    pass: "service@dyna9870",              // 🔒 Make sure this is correct
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,               // Optional: Set to `true` if you have a valid SSL cert
  },
});


    await transporter.sendMail({
      from: '"Dynaclean Contact Form" <service@dynacleanindustries.com>',
      to: "service@dynacleanindustries.com",
      subject: "Dynaclean: Service Support",
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Product: ${product}
Model: ${model}
Address: ${address}
Message: ${msg}`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(
      JSON.stringify({ message: "Failed to send email. Try again later." }),
      { status: 500 }
    );
  }
}

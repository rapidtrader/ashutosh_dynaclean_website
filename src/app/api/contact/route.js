import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, products, msg } = await req.json(); // ✅ changed 'product' → 'products'

    // ✅ Validate all fields
    if (!name || !email || !phone || !products || products.length === 0 || !msg) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // ✅ Convert selected products array to readable string
    const productList = Array.isArray(products)
      ? products.join(", ")
      : products;

    // ✅ SMTP credentials (use env vars in production)
    const SMTP_USER = "contact";
    const SMTP_PASS = "wVueJ^O.M[FKKz-v";

    const transporter = nodemailer.createTransport({
      host: "mail.dynacleanindustries.com",
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"Dynaclean Contact Form" <${SMTP_USER}>`,
      to: "contact@dynacleanindustries.com",
      subject: "New Contact Form Submission - Dynaclean",
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Products: ${productList}
Message: ${msg}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Products:</strong> ${productList}</p>
        <p><strong>Message:</strong> ${msg}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(
      JSON.stringify({
        message: "Failed to send email. Check server logs for details.",
      }),
      { status: 500 }
    );
  }
}

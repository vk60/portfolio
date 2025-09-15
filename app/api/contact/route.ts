import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.formData();
     console.log(data)
    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const message = data.get("message")?.toString();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email via Resend
    try {
      await resend.emails.send({
        from: "vikasy.vy6060@gmail.com", // your verified sender email
        to: "vikasy.vy6060@gmail.com",   // where you want to receive submissions
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h1>Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
      console.log("SUCCESSFULL")
    } catch (error:any) {
      console.log(error)
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted and email sent successfully!",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

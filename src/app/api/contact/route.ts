import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailData = {
      to: "singhatwork55@gmail.com",
      from: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Service Interested In:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Builder AI contact form at builder-ai.dev
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
${service ? `Service Interested In: ${service}` : ''}

Message:
${message}

---
This email was sent from the Builder AI contact form at builder-ai.dev
      `,
    };

    // Using Resend API for email sending
    // You'll need to set RESEND_API_KEY in your environment variables
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      
      // For development/testing: Log the email data
      console.log("📧 Contact Form Submission (Email not sent - API key missing):");
      console.log(JSON.stringify(emailData, null, 2));
      
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully (development mode - email logged to console)",
        dev: true,
      });
    }

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Builder AI Contact Form <noreply@builder-ai.dev>", // Using verified domain
        to: emailData.to,
        reply_to: email,
        subject: emailData.subject,
        html: emailData.html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      throw new Error("Failed to send email");
    }

    const data = await response.json();
    console.log("✅ Email sent successfully:", data.id);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      emailId: data.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

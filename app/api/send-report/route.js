import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, summary, monthlySavings, annualSavings } = body;

    const data = await resend.emails.send({
      from: "StackSpend <onboarding@resend.dev>",
      to: [email],
      subject: "Your AI Spend Audit Report",

      html: `
        <h1>AI Spend Audit Report</h1>

        <p><strong>Monthly Savings:</strong> $${monthlySavings}</p>

        <p><strong>Annual Savings:</strong> $${annualSavings}</p>

        <h2>AI Summary</h2>

        <p>${summary}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

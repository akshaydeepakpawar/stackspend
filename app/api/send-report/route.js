import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, summary, monthlySavings, annualSavings, reportLink } = body;

    const data = await resend.emails.send({
      from: "StackSpend <onboarding@resend.dev>",

      to: [email],

      subject: "Your AI Spend Audit Report",

      html: `
        <h1>AI Spend Audit Report</h1>

        <p>
          Thanks for using StackSpend.
        </p>

        <hr />

        <h2>Potential Savings</h2>

        <p>
          Monthly Savings:
          <strong>$${monthlySavings}</strong>
        </p>

        <p>
          Annual Savings:
          <strong>$${annualSavings}</strong>
        </p>

        <hr />

        <h2>AI Summary</h2>

        <p>${summary}</p>

        <hr />

        <p>
          View Full Report:
          <a href="${reportLink}">
            ${reportLink}
          </a>
        </p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to send email",
      },
      {
        status: 500,
      },
    );
  }
}

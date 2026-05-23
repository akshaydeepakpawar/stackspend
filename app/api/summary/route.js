import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const prompt = `
You are an AI SaaS cost optimization consultant.

Team Size: ${body.teamSize}
Use Case: ${body.useCase}

Monthly Savings:
${body.totalMonthlySavings}

Annual Savings:
${body.totalAnnualSavings}

Recommendations:
${JSON.stringify(body.recommendations)}

Write a professional summary in 80-120 words.

Explain:
- current situation
- savings opportunities
- annual impact
- recommendation

Do not use bullet points.
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          model: "openai/gpt-4o-mini",

          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    return NextResponse.json({
      summary:
        data.choices?.[0]?.message?.content || "Unable to generate summary.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        summary: "Unable to generate summary at this time.",
      },
      {
        status: 500,
      },
    );
  }
}

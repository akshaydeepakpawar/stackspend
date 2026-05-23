import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);
    const audit = await prisma.audit.create({
      data: {
        report: body.report,
        summary: body.summary,
        totalMonthlySavings: body.totalMonthlySavings,
        totalAnnualSavings: body.totalAnnualSavings,

        tools: {
          create: body.tools.map((tool) => ({
            tool: tool.tool,
            plan: tool.plan,
            monthlySpend: Number(tool.monthlySpend),
            seats: Number(tool.seats),
          })),
        },
      },

      include: {
        tools: true,
      },
    });

    return NextResponse.json(audit);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to save audit" },
      { status: 500 },
    );
  }
}

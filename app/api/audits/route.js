import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const audit = await prisma.audit.create({
      data: {
        teamSize: body.teamSize,
        useCase: body.useCase,
        recommendation: body.recommendation,
        savings: body.savings,

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
      { status: 500 }
    );
  }
}
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const audit = await prisma.audit.create({
      data: {
        tool: body.tool,
        plan: body.plan,
        monthlySpend: body.monthlySpend,
        seats: body.seats,
        teamSize: body.teamSize,
        useCase: body.useCase,
        recommendation: body.recommendation,
        savings: body.savings,
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
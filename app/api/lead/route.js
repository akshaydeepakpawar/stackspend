import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const lead = await prisma.lead.create({
      data: {
        email: body.email,
        company: body.company || null,
        role: body.role || null,
      },
    });

    return NextResponse.json(lead);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to save lead",
      },
      {
        status: 500,
      }
    );
  }
}
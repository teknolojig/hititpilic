import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json()
    
    const question = await prisma.question.update({
      where: { id },
      data: {
        answer: data.answer,
        status: data.status
      }
    })

    return NextResponse.json(question)
  } catch (error) {
    console.error("Update question error:", error)
    return NextResponse.json({ error: "Failed to update question" }, { status: 500 })
  }
}
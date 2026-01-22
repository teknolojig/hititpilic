import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const question = await prisma.question.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || null,
        category: data.category,
        question: data.question,
      }
    })

    return NextResponse.json({ success: true, id: question.id })
  } catch (error) {
    console.error("Question form error:", error)
    return NextResponse.json({ error: "Failed to submit question" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      orderBy: { createdAt: "desc" }
    })
    
    return NextResponse.json(questions)
  } catch (error) {
    console.error("Get questions error:", error)
    return NextResponse.json({ error: "Failed to fetch questions" }, { status: 500 })
  }
}
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json()
    
    const complaint = await prisma.complaint.update({
      where: { id },
      data: {
        status: data.status,
        notes: data.notes
      }
    })

    return NextResponse.json(complaint)
  } catch (error) {
    console.error("Update complaint error:", error)
    return NextResponse.json({ error: "Failed to update complaint" }, { status: 500 })
  }
}
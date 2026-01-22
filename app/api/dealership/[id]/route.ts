import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json()
    
    const application = await prisma.dealershipApplication.update({
      where: { id },
      data: {
        status: data.status,
        notes: data.notes
      }
    })

    return NextResponse.json(application)
  } catch (error) {
    console.error("Update application error:", error)
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 })
  }
}
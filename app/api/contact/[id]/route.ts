import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json()
    
    const contact = await prisma.contactForm.update({
      where: { id },
      data: {
        status: data.status,
        notes: data.notes
      }
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.error("Update contact error:", error)
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 })
  }
}
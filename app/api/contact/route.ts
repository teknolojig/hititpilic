import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const contact = await prisma.contactForm.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      }
    })

    return NextResponse.json({ success: true, id: contact.id })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contactForm.findMany({
      orderBy: { createdAt: "desc" }
    })
    
    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Get contacts error:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
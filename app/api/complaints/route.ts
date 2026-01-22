import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const complaint = await prisma.complaint.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        orderNumber: data.orderNumber || null,
        productName: data.productName,
        complaintType: data.complaintType,
        description: data.description,
      }
    })

    return NextResponse.json({ success: true, id: complaint.id })
  } catch (error) {
    console.error("Complaint form error:", error)
    return NextResponse.json({ error: "Failed to submit complaint" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const complaints = await prisma.complaint.findMany({
      orderBy: { createdAt: "desc" }
    })
    
    return NextResponse.json(complaints)
  } catch (error) {
    console.error("Get complaints error:", error)
    return NextResponse.json({ error: "Failed to fetch complaints" }, { status: 500 })
  }
}
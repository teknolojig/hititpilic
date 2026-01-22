import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const application = await prisma.dealershipApplication.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        province: data.province,
        district: data.district,
        address: data.address,
        currentBusiness: data.currentBusiness || null,
        monthlyCapacity: data.monthlyCapacity,
        references: data.references || null,
        additionalInfo: data.additionalInfo || null,
      }
    })

    return NextResponse.json({ success: true, id: application.id })
  } catch (error) {
    console.error("Dealership application error:", error)
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const applications = await prisma.dealershipApplication.findMany({
      orderBy: { createdAt: "desc" }
    })
    
    return NextResponse.json(applications)
  } catch (error) {
    console.error("Get applications error:", error)
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 })
  }
}
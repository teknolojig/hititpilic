import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const [
      dealershipTotal,
      dealershipPending,
      contactTotal,
      contactUnread,
      questionTotal,
      questionWaiting,
      complaintTotal,
      complaintPending
    ] = await Promise.all([
      prisma.dealershipApplication.count(),
      prisma.dealershipApplication.count({ where: { status: "pending" } }),
      prisma.contactForm.count(),
      prisma.contactForm.count({ where: { status: "unread" } }),
      prisma.question.count(),
      prisma.question.count({ where: { status: "waiting" } }),
      prisma.complaint.count(),
      prisma.complaint.count({ where: { status: "pending" } })
    ])

    return NextResponse.json({
      dealerships: { total: dealershipTotal, pending: dealershipPending },
      contacts: { total: contactTotal, unread: contactUnread },
      questions: { total: questionTotal, waiting: questionWaiting },
      complaints: { total: complaintTotal, pending: complaintPending }
    })
  } catch (error) {
    console.error("Stats error:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
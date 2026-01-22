import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST() {
  try {
    // Admin kullanıcısı oluştur
    const hashedPassword = await bcrypt.hash("admin123", 10)
    
    const existingUser = await prisma.user.findUnique({
      where: { email: "admin@hititpilic.com" }
    })

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: "admin@hititpilic.com",
          password: hashedPassword,
          name: "Admin",
          role: "admin"
        }
      })
    }

    return NextResponse.json({ message: "Admin user created successfully" })
  } catch (error) {
    console.error("Seed error:", error)
    return NextResponse.json({ error: "Failed to create admin user" }, { status: 500 })
  }
}
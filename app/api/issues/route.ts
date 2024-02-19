import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from '@/prisma/client'


const schema = z.object({
    title: z.string().min(3).max(255),
    description: z.string().min(3)
})

export const POST = async(req: NextRequest) => {

    const body = await req.json()
  
    const validateBody = schema.safeParse(body)

    if (!validateBody.success) return NextResponse.json({ error: validateBody.error}, { status: 400 })

    const issue = await prisma.issue.create({
        data: {title: body.title, description: body.description}
    })

    return NextResponse.json(issue)
        
    }
        

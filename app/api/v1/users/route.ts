import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt-ts"

export async function POST(request:NextRequest){
    const data = await request.json()
    const {name,email,password} = data
    console.log(data)
    const existingUser = await db.user.findUnique({
        where:{
            email
        }
    })
    if(existingUser){
        return NextResponse.json({
            data:null,
            message:"user already exists"
        },{
            status:409
        })
    }
    const hashedPassword = await hash(password,10)
    const newUser = await db.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    })
    return NextResponse.json({
        data:newUser,
        message:"user created successfully"
    },{
        status:201
    })
}
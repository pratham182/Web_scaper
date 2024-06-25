import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

export const createStudent=async()=>{
    await prisma.student.create({
        data:{
            name:"pratham",
            rollno:1009
        }
    })
}


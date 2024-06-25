import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

export const createStudent=async()=>{
    await prisma.student.create({
        data:{
            name:"pRatjam",
            rollno:1088298,
            branch:{
                connect:{
                    id:1
                }
            }
        }
    })
}


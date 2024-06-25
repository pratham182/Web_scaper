import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

export const createBranch=async()=>{
    await prisma.branch.create({
        data:{
            id:1,
            name:"cse"
        }
    })
}
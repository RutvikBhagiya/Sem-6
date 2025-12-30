import { PrismaMariaDb } from "@prisma/adapter-mariadb"; 
import { PrismaClient } from "@/lib/generated/prisma/client"; 

const adapter = new PrismaMariaDb({ 
    host:"localhost", 
    port:3306, 
    user:"root", 
    password:"Rutvik&106", 
    database:"awt_lab13", 
    connectionLimit:5 
}) 
export const prisma = new PrismaClient({adapter});
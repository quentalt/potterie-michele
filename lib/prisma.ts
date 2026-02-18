import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from "@prisma/adapter-neon";


const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaNeon({ connectionString })
export const prisma = new PrismaClient({ adapter })


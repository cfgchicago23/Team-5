import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("Hello");
    await prisma.user.create({
        data: {
            email: "johndoe@gmail.com",
            firstname: "John",
            lastname: "Doe",
            phoneNumber: "111-111-1111"
        }
    });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

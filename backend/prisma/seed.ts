import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createDummyUsers() {
    await prisma.user.create({
        data: {
            email: "johndoe@gmail.com",
            firstname: "John",
            lastname: "Doe",
            phoneNumber: "111-111-1111"
        }
    });
}

async function createDummyPosts() {
    const johndoe = await prisma.user.findUnique({
        where: {
            'email': 'johndoe@gmail.com'
        }
    });

    await prisma.post.create({
        data: {
            authorId: johndoe.id,
            caption: "Had a great time volunteering, learned how to paint",
            date: "2023-04-04"
        }
    });

    await prisma.post.create({
        data: {
            authorId: johndoe.id,
            caption: "Volunteering Part 2, great time again, learned how to paint",
            date: "2023-04-04"
        }
    })
}

async function main() {
    await createDummyUsers();
    await createDummyPosts();
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

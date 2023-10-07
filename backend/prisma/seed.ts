import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createDummyUsers() {
    await prisma.user.create({
        data: {
            email: "johndoe@gmail.com",
            name: "John Doe",
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
            imgURL: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            description: "Had a great time volunteering, learned how to paint",
            postedDate: "2023-04-04"
        }
    });

    await prisma.post.create({
        data: {
            authorId: johndoe.id,
            imgURL: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            description: "Volunteering Part 2, great time again, learned how to paint",
            postedDate: "2023-04-04"
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

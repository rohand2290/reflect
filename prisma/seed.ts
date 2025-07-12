import { Prisma, PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();


const userData: Prisma.UserCreateInput[] = [
  {
    email: "johndoe@gmail.com",
    password: "password192",
    username: "John",
    entries: {
      create: [
        {
          questions: [],
          content: "Today was a cool day."
        },
        {
          questions: ["One thing you achieved."],
          content: "Ran a 4k!",
        },
      ],
    },
  },
  {
    email: "jackdoe@gmail.com",
    password: "testpassword",
    username: "Jack",
    entries: {
      create: [
        {
          questions: [],
          content: "Today was a not so good day."
        },
        {
          questions: ["One thing you achieved."],
          content: "Made my laundry!",
        },
      ],
    },
  },
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({data: u});
    }
}

main();
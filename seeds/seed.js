const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient()


async function main() {
  
    for (let i = 0; i < 10; i++) {
        await prisma.user.create({
            data: {
                "name": faker.name.firstName(),
                "email": faker.internet.email(),
                "password" : faker.random.word()
            }
        })
    }

    for (let i = 0; i < 10; i++) {
      await prisma.category.create({
          data: {
              "cate": faker.random.word()
          }
      })
  }

for (let i = 0; i < 100; i++) {
  await prisma.comment.create({
      data: {
          "commn": faker.random.word(),
          "articleId": faker.datatype.number({
            'min': 1,
            'max': 10
        })
      }
  })
}

for (let i = 0; i < 100; i++) {
  await prisma.article.create({
      data: {
          
          "title": faker.random.word(),
          "content": faker.lorem.paragraph(),
          "authorId": faker.datatype.number({
            'min': 1,
            'max': 10
        })
      }
  })
}
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
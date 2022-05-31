const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      name: "Leg",
      price: 10,
      image: "/img/leg.jpg",
    },
  });
  await prisma.product.create({
    data: {
      name: "Stool Top",
      price: 20,
      image: "/img/stool-top.jpg",
    },
  });
  await prisma.product.create({
    data: {
      name: "Chair Top",
      price: 35,
      image: "/img/chair-top.jpg",
    },
  });
  const products = await prisma.product.findMany();
  console.log("Added products: ", products);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

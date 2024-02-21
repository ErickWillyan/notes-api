import prisma from "../lib/prisma.js";

const DetailUserService = async (id) => {
  try {
    const user = await prisma.users.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export { DetailUserService };

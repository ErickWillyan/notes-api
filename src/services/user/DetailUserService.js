import prisma from "../../lib/prisma.js";

const DetailUserService = async (id) => {
  try {
    const user = await prisma.user.findFirst({
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
    console.log(error);
    return;
  }
};

export { DetailUserService };

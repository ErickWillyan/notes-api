import prisma from "../../lib/prisma.js";

const ListTaskService = async (userId) => {
  try {
    const Task = await prisma.task.findMany({
      where: { userId: userId },
      select: {
        name: true,
        description: true,
      },
    });

    return Task;
  } catch (error) {
    console.log(error);
    return;
  }
};

export { ListTaskService };

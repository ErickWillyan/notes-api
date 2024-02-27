import prisma from "../../lib/prisma.js";

const AlterTaskService = async ({ taskId, name, description }) => {
  try {
    const Task = await prisma.task.update({
      where: { id: taskId },
      data: {
        name,
        description,
      },
    });

    return Task;
  } catch (error) {
    console.log(error);
    return;
  }
};

export { AlterTaskService };

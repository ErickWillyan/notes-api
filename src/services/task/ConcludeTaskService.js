import prisma from "../../lib/prisma.js";

const ConcludeTaskService = async ({ taskId }) => {
  try {
    const Task = await prisma.task.update({
      where: { id: taskId },
      data: {
        status: "concluida",
      },
    });

    console.log("Tarefa concluida");
    return Task;
  } catch (error) {
    console.log(error);
    return;
  }
};

export { ConcludeTaskService };

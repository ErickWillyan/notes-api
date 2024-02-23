import prisma from "../../lib/prisma.js";

const DeleteTaskService = async ({ taskId }) => {
  try {
    const Task = await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    console.log("Tarefa deletada");
    return { deltado: true };
  } catch (error) {
    console.log(error);
    return;
  }
};

export { DeleteTaskService };

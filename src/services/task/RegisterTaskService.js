import prisma from "../../lib/prisma.js";

const RegisterTaskService = async ({ name, description, userId }) => {
  try {
    const Task = await prisma.task.create({
      data: {
        name,
        description,
        userId,
      },
    });

    console.log("Tarefa criada");

    return { Task, message: "Tarefa criada" };
  } catch (error) {
    console.log(error);
    return;
  }
};

export { RegisterTaskService };

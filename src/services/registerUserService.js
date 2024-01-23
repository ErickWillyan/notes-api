import prisma from "../lib/prisma.js";
import bcrypt from "bcryptjs";

const RegisterUserService = async ({ name, email, password }) => {
  try {
    const userAlreadyExists = await prisma.users.findFirst({
      where: { email: email },
    });

    if (userAlreadyExists) {
      throw new Error("Este usuário já existe");
    }

    const nameHash = await bcrypt.hash(name, 8);
    const emailHash = await bcrypt.hash(email, 8);
    const passwordHash = await bcrypt.hash(password, 8);

    const user = await prisma.Users.create({
      data: {
        email: emailHash,
        name: nameHash,
        password: passwordHash,
      },
    });

    console.log("Usuário cadastrado");
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { RegisterUserService };

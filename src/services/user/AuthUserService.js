import prisma from "../../lib/prisma.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const AuthUserService = async ({ email, password }) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return { erro: "Username or password invalid" };
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);

    if (!passwordMatch) {
      return { erro: "Username or password invalid" };
    }

    const token = jwt.sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: "30d",
    });

    return {
      message: "Login Realizado",
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  } catch (error) {
    console.log(error);
    return;
  }
};

export { AuthUserService };

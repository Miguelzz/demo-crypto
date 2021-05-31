/** @format */
import jwt from "jsonwebtoken";
import env from "../env";
import { io } from "../main";
import { Profile } from "../repositories/profile.repository";

export const intSocket$ = () => {
  io.on("connection", (socket: any) => {
    socket.authorized = false;
    socket.emit("connected");
    socket.on("authorize", async (token: string) => {
      try {
        const { id } = jwt.verify(token, env.jwtSecret!) as any;
        console.log({ id });
        socket.authorized = true;
        socket.join(`raffles:${id}`);
        socket.join(`pre-buy-ticket:${id}`);
        socket.join(`buy-ticket:${id}`);
        const profile = await Profile.findById(id).populate("raffles");
        io.to(`raffles:${id}`).emit("raffles", profile.raffles);
      } catch (e) {
        socket.authorized = false;
      }
    });
  });
};

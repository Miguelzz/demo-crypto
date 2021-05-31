/** @format */

import { io } from "../main";

export const getCurrency = async (req: any, res: any) => {
  const token = req.headers["x-token"] as string;

  io.to(`buy-ticket:$`).emit("buy-ticket", {});

  res.json(false);
};

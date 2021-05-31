/** @format */
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { createServer } from "http";
import { Socket } from "socket.io";
import { address } from "ip";
import env, { publicPath } from "./env";
import { intSocket$ } from "./connections/socket";
import cryptoRoutes from "./routes/crypto.route";

export const app: Application = express();
export const server = createServer(app);
export const io: Socket = require("socket.io")(server);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.use("/api/crypto", cryptoRoutes);

server.listen(env.port, async () => {
  intSocket$();
  console.log(
    `start: http://${address()}:${env.port} http://localhost:${env.port} ✌`
  );
});

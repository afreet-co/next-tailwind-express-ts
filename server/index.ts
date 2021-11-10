import { config } from "dotenv";
config();
import express, { Request, Response } from "express";
import next from "next";
import { postRouter } from "./routes/posts";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || "localhost";
const protocol = process.env.PROTOCOL || "http";

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(express.static("public"));
    server.get("/api/hello", (req, res) => {
      res.json({ message: "Hello World" });
    });
    server.use("/api/posts", postRouter);
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(
        `> Ready on ${protocol}://${domain}:${port} - env ${process.env.NODE_ENV}`
      );
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

import { Router } from "express";
import { posts } from "../posts";

export const postRouter = Router();

postRouter.get("/", (req, res) => {
  res.json(posts);
});
postRouter.get("/:id", (req, res) => {
  const id = +req.params.id;
  const post = posts.find((post) => post.id === id);
  res.json(post);
});

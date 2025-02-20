import "./instrument.js";
import express, { Request, Response } from "express";
import PostService from "./services/PostService";
import * as Sentry from "@sentry/node";

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));

const postService = new PostService();

app.get("/", (req: Request, res: Response) => {
    res.render("home");
});

app.get("/posts", (req: Request, res: Response) => {
    const posts = postService.getAllPosts();
    res.render("posts", { posts });
});

app.post("/posts", (req: Request, res: Response) => {
    const post = postService.createPost(req.body);
    console.log(post);
    res.redirect(`/posts`);
});

app.get("/posts/new", (req: Request, res: Response) => {
    res.render("new-post");
});

app.get("/posts/:id/edit", (req: Request, res: Response) => {
    const post = postService.getPostById(parseInt(req.params.id));
    if (!post) {
        res.status(404).json({ error: "Post not found" });
        return;
    }
    res.render("edit-post", { post });
});

app.get("/posts/:id", (req: Request, res: Response) => {
    const post = postService.getPostById(parseInt(req.params.id));
    if (!post) {
        res.status(404).json({ error: "Post not found" });
        return;
    }
    res.render("post", { post });
});

app.post("/posts/:id", (req: Request, res: Response) => {
    console.log(req.params.id);
    const updatedPost = postService.updatePost(parseInt(req.params.id), req.body);
    res.redirect(`/posts/${req.params.id}`);
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// MONITORING : test de Sentry
try {
    // @ts-expect-error: This is a test error to demonstrate Sentry integration
    foo();
} catch (e) {
    Sentry.captureException(e);
}

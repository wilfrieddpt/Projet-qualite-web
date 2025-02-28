"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const url_1 = require("url");
const path_1 = require("path");
const __filename = (0, url_1.fileURLToPath)(import.meta.url);
const __dirname = (0, path_1.dirname)(__filename);
const data = JSON.parse((0, fs_1.readFileSync)((0, path_1.join)(__dirname, "../data.json"), "utf-8"));
class PostService {
    constructor() {
        this.posts = [...data.posts];
    }
    getAllPosts() {
        return this.posts;
    }
    getPostById(id) {
        return this.posts.find((post) => post.id === id);
    }
    createPost(postData) {
        const newPost = {
            id: this.posts.length + 1,
            title: postData.title,
            content: postData.content,
            author: postData.author,
            createdAt: new Date().toISOString()
        };
        this.posts.push(newPost);
        return newPost;
    }
    updatePost(id, postData) {
        const index = this.posts.findIndex((post) => post.id === id);
        if (index === -1) return null;
        this.posts[index] = Object.assign(Object.assign({}, this.posts[index]), {
            title: postData.title,
            content: postData.content,
            author: postData.author,
            updatedAt: new Date().toISOString()
        });
        return this.posts[index];
    }
}
exports.default = PostService;

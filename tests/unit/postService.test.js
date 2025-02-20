import { describe, it, expect, beforeEach } from "vitest";
import PostService from "../../src/services/PostService";

describe("PostService", () => {
    let postService;
    //ICI on créé une nouvelle instant ce PostService pour s'assuré que chaque test est indépendant
    beforeEach(() => {
        postService = new PostService();
    });

    //TEST DE LA FONCTION getPostById
    it("devrait récupéré un post par son ID", () => {
        //ICI on créé un post avec des info bidon
        const post = postService.createPost({
            title: "test post",
            content: "ceci est un test",
            author: "Monsieur TEST"
        });

        //ICI on récupère le post par son ID ET on test si c'est le même post
        const foundPost = postService.getPostById(post.id);
        expect(foundPost).toEqual(post);
    });

    //TEST DE LA FONCTION createPost
    it("devrait crer un nouveau post", () => {
        // on stoke le nombre de post avant d'en ajouter un
        const initialPostCount = postService.posts.length;

        const newPost = postService.createPost({
            title: "Nouveau Post",
            content: "contenu",
            author: "Jeane"
        });

        //ICI on test si le post a bien un ID
        expect(newPost).toHaveProperty("id");
        ///ICI on test si le titre du post est bien "Nouveau Post"
        expect(newPost.title).toBe("Nouveau Post");
        //ICI on test si la longueur du tableau de post est bien de 1 donc si on a bien ajouter un post
        expect(postService.posts.length).toBe(initialPostCount + 1);
    });

    //TEST DE LA FONCTION updatePost
    it("devrait mettre à jour un post existant", () => {
        const post = postService.createPost({
            title: "Ancien Titre",
            content: "Ancien Contenu",
            author: "Bob"
        });

        //On change le cotenu du post
        const updatedPost = postService.updatePost(post.id, {
            title: "Nouveau Titre",
            content: "Nouveau Contenu",
            author: "Bob"
        });

        //on test ici si on a bien changé
        expect(updatedPost).not.toBeNull(); //on vérifi que le post n'est pas null
        expect(updatedPost.title).toBe("Nouveau Titre"); //ICI on test si le titre du post est bien "Nouveau Titre"
    });

    //TEST DE LA FONCTION updatePost
    it("ne devrait pas mettre à jour un post inexistant", () => {
        const result = postService.updatePost(999, {
            title: "Impossible",
            content: "je ne sais pas quoi mettre",
            author: "Personne"
        });

        expect(result).toBeNull(); // on vérif que ça n' ps pas marché
    });
});

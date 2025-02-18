import { test, expect } from "@playwright/test";

test("Créer, modifier et vérifier un article", async ({ page }) => {
    await page.goto("http://localhost:3009/posts/new");

    //ICI on créé l'article
    await page.fill("#title", "Mon Article Test");
    await page.fill("#content", "Ceci est le contenu de mon article");
    await page.fill("#author", "Testeur");
    //On récup le bouton pour publier
    const PublierBtn = await page.locator("text=Publier l'article");
    await expect(PublierBtn).toBeVisible();
    await PublierBtn.click();


    // On vérif ici qu'on l'à bien créé
    await page.goto("http://localhost:3009/posts");
    await page.pause(); // Mets en pause ici pour voir si l'article apparaît
    const article = await page.locator("text=Mon Article Test");
    await expect(article).toBeVisible();

    //ICI on récup l'ID de l'article
    const articleId = await page.locator("text=Mon Article Test").getAttribute("href");
    //On va sur la page de l'articme
    await page.goto(`http://localhost:3009${articleId}`);

    //On récupe le bouton pour modifier l'article
    const modifierBtn = await page.locator("text=Modifier l'article");
    await expect(modifierBtn).toBeVisible();
    await modifierBtn.click(); //On clic dessus

    //ICI on change la valeur de l'article
    await page.fill("#title", "Article Modifié");
    await page.click("text=Mettre à jour l'article");

    // ICI on vérification après modification
    await page.goto("http://localhost:3009/posts");
    const updatedArticle = await page.locator("text=Article Modifié");
    await expect(updatedArticle).toBeVisible();
});

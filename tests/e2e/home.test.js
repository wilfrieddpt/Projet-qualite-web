import { test, expect } from "@playwright/test";


test("La page d'accueil affiche le bon titre", async ({ page }) => {
    //ICI on va sur la page d'accueil
    await page.goto("http://localhost:3009");
    const title = await page.locator("h1"); //on récupère le texte de la balise h1 et on vérifi qu'il existe 
    await expect(title).toBeVisible(); //ICI on vérifi que le titre est visible

    // Vérifier que le titre est bien "Bienvenue sur Super Blog"
    await expect(title).toHaveText("Bienvenue sur Super Blog");
});
  

test("La page d'accueil contient un lien vers la liste des articles", async ({ page }) => {
    await page.goto("http://localhost:3009");
    const link = await page.locator('a[href="/posts"]');  //on récupère le lien qui mène vers la page des articles
    await expect(link).toBeVisible(); //ICI on vérifi que le lien est visible
});
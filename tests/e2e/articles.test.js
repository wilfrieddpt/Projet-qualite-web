import { test, expect } from "@playwright/test";

test("La page liste des articles affiche le bon titre", async ({ page }) => {
    //ICI on va sur la page des articles
    await page.goto("http://localhost:3009/posts");
    //on récupère le texte de la balise h1 et on vérifi qu'il existe par là
    const title = await page.locator("h1");
    //On vérif ici que le texte est le bon 
    expect(title).toHaveText("Liste des articles");
    //pour vérif que le titre est visible
    await expect(title).toBeVisible();
});


test("Le bouton 'Créer un article' fonctionne et existe", async ({ page }) => {
  await page.goto("http://localhost:3009/posts");
  const createButton = await page.locator("text=Nouvel article");
  await expect(createButton).toBeVisible();

  await createButton.click();
  //On vérifie qu'on est bien envoyer à la bonne URL
  await expect(page).toHaveURL("http://localhost:3009/posts/new");
});

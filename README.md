# **PROJET QUALITÉ ALGORITHMIQUE**

## **MEMBRES DU GROUPE**
- **Enzo GONZALEZ**
- **Yanis MERIEM**
- **Clément BRUNET**
- **Wilfried DUPONT**

**GROUPE : A1**

---

## **Résumé**
Ce README contient un résumé des fonctionnalités implémentées ainsi que les réponses aux éventuelles questions.

---

## **Linting des commits**
Afin d'assurer la qualité des messages de commit, nous avons mis en place **Commitlint**. Cet outil vérifie que les messages respectent les règles définies dans le projet.

Nous avons choisi de classifier les commits en plusieurs catégories :
- **fonctionnalités**
- **correction**
- **ajout**
- **test**
- **config**

Ces catégories couvrent la majorité des cas de commit rencontrés.

---

## **Mise en place des outils de qualité**
Afin de faciliter notre environnement de travail, nous avons mis en place plusieurs outils de qualité :
- **ESLint** : analyse le code et détecte les erreurs de style et de qualité afin de garantir un code propre.
- **Prettier** : formate automatiquement le code pour une meilleure lisibilité.
- **Husky** : permet d'automatiser l'exécution des tests et du linting avant chaque commit.

---

## **Passage à TypeScript**
Nous avons converti le projet en **TypeScript** afin d'améliorer la qualité du code et de bénéficier de ses avantages.

### **Installation de TypeScript**
```bash
npm install --save-dev typescript @types/node @types/express
```

### **Conversion du code**
- Changement de l'extension des fichiers.
- Adaptation du code pour correspondre aux standards TypeScript.

---

## **Debugging et Performance**

### **Débogage avec --inspect**
#### **Procédure**
1. Lancer le projet avec `--inspect`.
2. Ouvrir l'inspecteur du navigateur (**F12** ou clic droit > Inspecter).
3. Ajouter des points d'arrêt dans le code avec `debugger;`.
4. Accéder aux variables via l'onglet **Scope**.
5. Visualiser les logs dans la console.

Ensuite dans le code on peut mettre des lignes pour arrêter le site à ceertain point : `debugger;`
Ensuite, il est possible avec **nodemon** que l'on doive recharger la page.

On a accé **aux variables** dans l'onglet Scope.
On peut aussi voir les message comme `console.log()` dans la parti console. 

**Finalement**

1. Le mode `--inspect` permet d’avoir une meilleure **visibilité** sur l'exécution du code
2. En utilisant les **breakpoints**, on peut voir quelle ligne pose problème
3. C’est beaucoup plus efficace que d'ajouter des `console.log()` partout


### **Utilisation d'Autocannon**
#### **Commande**
```bash
autocannon -c 25 -d 10 -p 3 http://localhost:3009/posts
```
#### **Justification**

Vu que la taille du site vraiment petite, il n'est pas concu pour recevoir beaucoup de personne ne même temps. 
L'architechture est assez simple, les utilisateurs ne passe pas beaucoup de temps à chercher les informations. En trois clic on accède à tout.  

Nous avons donc choisi ces paramètres précis en fonction de la taille du site à tester.
En voyant le projet, il est clair que c'est un petit site qui ne doit pas être très puissant et pouvoir répondre à des millions de requette. 

| Paramètre   | Valeur | Explication |
|-------------|--------|-------------|
| `-c 25`    | 25     | Nombre d'utilisateurs simultanés. |
| `-d 10`    | 10     | Durée du test en secondes. |
| `-p 3`     | 3      | Nombre de requêtes envoyées en parallèle. |

#### **Résultats**
- Latence moyenne : **4758.52 ms**
- Requêtes par seconde : **8,2**
- Bande passante moyenne : **5.18 MB/s**

### **Conclusion**
Autocannon permet effectivement assez bien de simuler plein de requête sur le server. Grace à cette outil on peut assez simplement tester un site plus ou moins grand. 

---

## **Tests unitaires et end-to-end**

### **Tests unitaires**
- Utilisation de **Vitest**.
- Tests situés dans `tests/unit/postService.test.js`.
- Commande pour exécuter les tests unitaires :
```bash
npm run test:unit
```

### **Tests End-to-End (E2E)**
- Utilisation de **Playwright**.
- Tests situés dans `tests/e2e/*.test.js`.
- Commande pour exécuter les tests E2E :
```bash
npm run test:e2e
```
- Avant de lancer les tests, démarrer le serveur avec :
```bash
npm run dev
```

### **Exécution de tous les tests**
```bash
npm run test
```

---

## **Monitoring et Reporting d'erreurs**

Pour le monitoring, nous utilisons **Sentry** afin d'avoir le suivis des erreurs rencontré sur le site.

### **Procédure d'installation**
1. Créer un compte sur [Sentry.io](https://sentry.io/).
2. Initialiser un projet sur Sentry et suivre les étapes d'installation.
3. Vérifier l'installation en insérant une erreur dans `index.js`.
4. Capturer l'erreur avec un `try...catch` :
5. Si l'erreur est bien intercepté par Sentry, alors le site de Sentry vous indiquera la bonne reception de l'erreur et vous invitera a vérifier votre onglet **"Issues"**. Rendez vous sur cet onglet pour retrouver votre erreur en détail.

---

## **Automatisation avec GitHub Actions**

### **Mise en place**
1. **Création du fichier de configuration**
   - Localisation : `.github/workflows/ci.yml`
   - Contient les étapes de la pipeline CI.

2. **Définition des jobs**
   - Ajout de configuration pour GitHub Actions qui exécute **ESLint**, les **tests unitaires** avec Vitest et les **tests E2E** avec Playwright

3. **Ajout des scripts dans `package.json`**
   - Les scripts doivent correspondre aux commandes appelées dans le fichier GitHub Actions.

4. **Test de la pipeline CI**
   - Une fois le fichier .github/workflows/ci.yml  configuré et mis à jour le package.json, pousser les modifications sur le dépôt GitHub. 
   - GitHub Actions lancera automatiquement la pipeline pour vérifier si tout fonctionne comme prévu.
   - Vérifier l'état dans l'onglet **Actions** du dépôt GitHub.

---

**Fin du README**


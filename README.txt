**************************PROJET QUALITE ALGORITHMIQUE**************************

MEMBRE DU GROUPE : Yanis MERIEM, Enzo GONZALEZ, Clément BRUNET, Wilfried DUPONT
GROUPE : A1

********************************************************************************
Ce REAME contient un réssumé des fonctionnalités implémenter et la réponse aux 
éventuelles questions.


********************************************************************************
                                Linting des commits





********************************************************************************
                            Mise en Place des Outils de Qualité





********************************************************************************
                                Passage à TypeScript





********************************************************************************
                            Debugging et Performance





********************************************************************************
                                Tests Unitaires et End-to-End

//Pour les TEST Unitaires

Utilisation de Vitest. 
Les tests du fichier  src/services/PostService.js ont été fait dans le fichier tests/unit/postService.test.js

La commande pour lancer seulement les tests unitaires est : npm run test:unit
L'explication du fonctionnement des tests a été rédigé dans le fichier tests/unit/postService.test.js, sous la forme de commentaire

//Pour les TEST E2E 

Utilisation de Playwright
Les fichiers de test sont dans le dossier tests/e2e/"fichierTests.test.js"

La commande pour lancer seulement les tests E2E est : npm run test:e2e
MAIS ATTENTION, il faut avant de lancer les tests faire un "npm run dev" pour que le site soit lancé sur le port 3009


Pour lancer tous les tests : npm run test

********************************************************************************
                            Monitoring et Reporting d Erreurs





********************************************************************************
                        Automatisation avec GitHub Actions


1. Créer un fichier de configuration pour GitHub Actions
Localisation du fichier : Dans le dépôt GitHub, créer un répertoire .github/workflows/.
Fichier de configuration : À l'intérieur de ce répertoire, créer un fichier YAML pour la pipeline, par exemple ci.yml.
Le fichier .github/workflows/ci.yml contiendra toutes les étapes de la pipeline CI.

2. Définir les jobs dans la pipeline
ajout de configuration pour GitHub Actions qui exécute ESLint, les tests unitaires avec Vitest et les tests E2E avec Playwright

3. Ajouter les scripts nécessaires dans package.json
avoir les scripts dans ton package.json qui correspondent aux commandes appelées dans le fichier GitHub Actions

4. Tester la pipeline CI
Une fois le fichier .github/workflows/ci.yml  configuré et mis à jour le package.json, pousser les modifications sur le dépôt GitHub. GitHub Actions lancera automatiquement la pipeline pour vérifier si tout fonctionne comme prévu.
 voir l'état de la pipeline en te rendant dans l'onglet "Actions" du dépôt GitHub.














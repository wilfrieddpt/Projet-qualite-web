**************************PROJET QUALITE ALGORITHMIQUE**************************

MEMBRE DU GROUPE : Yanis MERIEM, Enzo GONZALEZ, Clément BRUNET, Wilfried DUPONT
GROUPE : A1

********************************************************************************
Ce REAME contient un réssumé des fonctionnalités implémenter et la réponse aux 
éventuelles questions.


********************************************************************************
                                Linting des commits

Pour assurer la qualité des messages de commit, nous avons mis en place Commitlint.
Commintlint vérifie que les messages de commit respectent les "règles" mise en place dans le projet.
Nous avons choisi par exemple de mettre les commits par catégorie: fonctionnalités, correction, ajout, test, config
Ces catégorie permettre de couvrir environ toute les possibilités de commit différent pour nous.

********************************************************************************
                            Mise en Place des Outils de Qualité

Afin de facilité notre environnement de travail, on a mis en place des outils de qualité,
comme Eslint. Eslint permet d'analyser le code et de détecter les erreur de style et de qualité, 
cela nous permet d'avoir un code qui est propre.
On a aussi mis en place prettier et Husky.

********************************************************************************
                                Passage à TypeScript

Nous avons converti le projet en TypeScript afin d'améliorer la qualité du ode et de bénéficier de ces avantages.

//installation de ts 
npm install --save-dev typescript @types/node @types/express

Pour la conversion nous avons du changer l'extension des fichiers et une fois fait, on a du modifier le code pour l'adapter au language TS

********************************************************************************
                            Debugging et Performance


		//Parti Débogage avec --inspect


Procédure à suivre : 
	- Lancer le projet avec --inspect
	- aller dans l'inspector dans le navigateur : F12 ou clic droit/inspecter

Ensuite dans le code on peut mettre des lignes pour arrêter le site à ceertain point : "debugger;"
			=> il est possible même avec nodemon que l'on doive recharger la page

Ensuite on a accé au variable dans l'onglet Scope.
On peut aussi voir les message comme console.log() dans la parti console. 
			=> diférent onglet : message / user message / error / no warning / info 
			=> cela permet de trier les messages que l'on veut voir
On peut aussi exécuter 
Finalement : 

	=> Le mode --inspect permet d’avoir une meilleure visibilité sur l'exécution du code
	=> En utilisant les breakpoints, on peut voir quelle ligne pose problème
	=> C’est beaucoup plus efficace que d'ajouter des console.log() partout


		//Parti pour autocannon

liste des commandes : 

        autocannon -c 25 -d 10 -p 3 http://localhost:3009/posts

Explication : 
Paramètre	        Valeur	        Pourquoi
=============================================================================================================================================
connections	        25	        Nombre d’utilisateurs simulée en même temps. ICI on a pas besoin de mettre la pression longtemps sur le server
duration	        10	        Durée totale du test en secondes. Au vu du site, il ne peut pas être surchargé pendant plus d'une minutes.
pipelining	        3	        Nombre de requêtes qu’une utilisateur envoie sans attendre la réponse précédente. En général sur les petits sit on fait une dieain de requette 


Justification : 
Au vu de la taille du site vraiment petite, il n'est pas concu pour recevoir beaucoup de personne ne même temps. 
Au vu de l'architechture, les utilisateurs ne passe pas beaucoup de temps à chercher les informations. En trois clic on accède à tout.  

Résultat : 
                    Temps de latence (Latency)
                    ┌─────────┬────────┬─────────┬─────────┬──────────┬────────────┬────────────┬──────────┐
                    │ Stat    │ 2.5%   │ 50%     │ 97.5%   │ 99%      │ Avg        │ Stdev      │ Max      │
                    ├─────────┼────────┼─────────┼─────────┼──────────┼────────────┼────────────┼──────────┤
                    │ Latency │ 256 ms │ 4831 ms │ 9773 ms │ 10068 ms │ 4758.52 ms │ 3229.73 ms │ 10068 ms │
                    └─────────┴────────┴─────────┴─────────┴──────────┴────────────┴────────────┴──────────┘                    
                    ┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
                    │ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
                    ├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
                    │ Req/Sec   │ 6       │ 6       │ 8       │ 11      │ 8,2     │ 1,78    │ 6       │
                    ├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
                    │ Bytes/Sec │ 3.79 MB │ 3.79 MB │ 5.05 MB │ 6.95 MB │ 5.18 MB │ 1.12 MB │ 3.79 MB │
                    └───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Conclusion : 
Autocannon permet effectivement assez bien de simuler plein de requête sur le server. Grace à cette outil on peut assez simplement tester un site 
plus ou moins grand. 

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


Pour le monitoring, nous utilisons Sentry afin d'avoir le suivis des erreurs rencontré sur le site.

Voici la procédure permettant d'initialiser Sentry et de récupérer les erreurs :
    1. Créer ou se connecter à un compte sur Sentry.io.
    2. Initialiser un projet Sentry sur le site Sentry.io et suivre les étapes d'instalation étape par étape de Sentry dans le site.
    3. Vérifier la bonne installation et initialisation de Sentry en instaurant une erreur dans le fichier "index.js".
    4. Capturer l'erreur avec un try catch et ajouter la ligne "Sentry.captureException(e);" dans le catch.
    5. Si l'erreur est bien intercepté par Sentry, alors lors de l'initialisation, le site de Sentry vous indiquera la bonne reception de l'erreur et vous invitera a vérifier votre onglet "Issues".
        Rendez vous sur cet onglet pour retrouver votre erreur en détail.



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














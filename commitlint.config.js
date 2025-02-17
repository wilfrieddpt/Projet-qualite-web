module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['Fonctionnalité', 'Correction de bug', 'Correction', 'Ajout', 'Test'], // a mettre en debut de message ex : "fonctionnalité: Ajout de la fonctionnalité"
      ],
      'subject-case': [2, 'always', 'sentence-case'], // Le message commence par une majuscule
      'header-max-length': [2, 'always', 100], // Limite à 100 caractères max
    },
  };
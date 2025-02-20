import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['fonctionnalité', 'correction de bug', 'correction', 'ajout', 'test', 'config'],
    ],
    'subject-case': [2, 'always', 'sentence-case'], // Le message commence par une majuscule
    'header-max-length': [2, 'always', 100], // Limite à 100 caractères max
  },
};

export default Configuration;
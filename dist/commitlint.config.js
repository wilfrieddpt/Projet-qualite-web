"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configuration = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", ["fonctionnalité", "correction de bug", "correction", "ajout", "test", "config", "mise à jour"]],
        "subject-case": [2, "always", "sentence-case"], // Le message commence par une majuscule
        "header-max-length": [2, "always", 100] // Limite à 100 caractères max
    }
};
exports.default = Configuration;

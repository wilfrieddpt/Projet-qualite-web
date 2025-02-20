// Sentry récupère les erreurs rencontré dans l'exécution du site et les envoie sur le dashboard de Sentry.io pour analyse grâce à la clé DSN du projet configuré.
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://67c545bb584b7f804b4f17e784c21cb3@o4508851783729152.ingest.de.sentry.io/4508851787399248", // Clé DSN du projet Sentry
});
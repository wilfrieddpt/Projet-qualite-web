"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const vite_plugin_1 = require("@sentry/vite-plugin");
exports.default = (0, vite_1.defineConfig)({
    build: {
        sourcemap: true // Source map generation must be turned on
    },
    plugins: [
        // Put the Sentry vite plugin after all other plugins
        (0, vite_plugin_1.sentryVitePlugin)({
            authToken: process.env.SENTRY_AUTH_TOKEN,
            org: "lessuperdevweb",
            project: "node"
        })
    ]
});

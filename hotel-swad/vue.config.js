/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',  // Allows access from any network
    port: 8080,       // You can change this if needed
    allowedHosts: 'all', // Allows access from GitHub Codespaces
    client: {
      webSocketURL: 'wss://' + process.env.CODESPACE_NAME + '-8080.github.dev', // Fix WebSocket issue
    },
    https: true, // Ensures compatibility with Codespaces (if required)
  }
});


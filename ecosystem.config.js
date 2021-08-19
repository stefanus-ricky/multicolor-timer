module.exports = {
    apps : [{
      name: "timer",
      script: 'serve',
      watch: '.',
      env: {
        PM2_SERVE_PATH: 'web-build',
        PM2_SERVE_PORT: 5000,
        NODE_ENV : "production"
      }
    }]
  }
  
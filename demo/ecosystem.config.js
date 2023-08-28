module.exports = {
    apps : [{
      name: "npm",
      cwd: '/home/george/projects/react-email-editor/dist',
      script: "npm",
      args: 'start',
      env: {
        NODE_ENV: "production",
        HOST: '0.0.0.0',
        PORT: '8080',
      },
    }]
  }
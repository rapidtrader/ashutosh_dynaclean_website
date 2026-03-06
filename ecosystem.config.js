module.exports = {
  apps: [{
    name: "dynacleanindustries-app",
    script: "npm",
    args: "start",
    cwd: "/root/ashutosh_dynaclean_website",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production"
    }
  }]
};

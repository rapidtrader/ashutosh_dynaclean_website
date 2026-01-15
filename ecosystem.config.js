module.exports = {
  apps : [{
    name   : "dynacleanindustries-app", // This name must match the one in pm2 list
    script : "npm", // or "yarn" if you use yarn
    args   : "start",
    cwd    : "/root/dynaclean/dynaclean", // Ensure this is the correct path to your Next.js app
    instances: "max", // Adjust as needed, "max" uses all CPU cores
    exec_mode: "cluster", // For scaling, use "fork" if you prefer single instance
    listen_timeout: 50000,
    kill_timeout: 5000,
    wait_ready: true,
    env: {
      NODE_ENV: "production",
      SMTP_USER: "adit@dynacleanindustries.com",
      SMTP_PASS: "Adit@2025" // <--- REPLACE THIS WITH YOUR ACTUAL SMTP PASSWORD
    }
  }]
};

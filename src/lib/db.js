// lib/db.js
import mysql from "mysql2/promise";
import dns from "dns/promises";

let resolvedIp = null;

// Resolve DB host to IPv4 (once per runtime)
async function resolveDbHost() {
  if (resolvedIp) return resolvedIp;

  const host = process.env.DB_HOST;
  if (!host) throw new Error("DB_HOST is missing in environment variables.");

  try {
    const { address } = await dns.lookup(host, { family: 4 });
    resolvedIp = address;
    console.log(`✅ [DB] Resolved ${host} to IPv4: ${resolvedIp}`);
    return resolvedIp;
  } catch (err) {
    console.error("❌ [DB] Failed to resolve DB_HOST:", err);
    throw new Error("DNS resolution failed for DB_HOST");
  }
}

export async function getDbConnection() {
  const host = await resolveDbHost();

  const conn = await mysql.createConnection({
    host,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: 10000,
  });

  return conn;
}
// Fallback entry for Render default `node index.js`
import("./backend/src/server.js").catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
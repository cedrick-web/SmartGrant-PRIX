import assert from "node:assert/strict";
import { after, before, test } from "node:test";

process.env.NODE_ENV = "test";
process.env.DATABASE_URL = "mysql://root:password@127.0.0.1:3306/smart_grand_prix";
process.env.SESSION_SECRET = "test-session-secret-with-at-least-32-characters";

const { app } = await import("../src/app.js");

let server: ReturnType<typeof app.listen>;
let baseUrl: string;

before(async () => {
  server = app.listen(0);
  await new Promise<void>((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });

  const address = server.address();
  assert.ok(address && typeof address !== "string");
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  if (!server) return;

  await new Promise<void>((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("health endpoint reports API status", async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, "ok");
  assert.equal(body.service, "smart-grand-prix-api");
  assert.equal(body.environment, "test");
  assert.ok(Number.isFinite(Date.parse(body.timestamp)));
});

test("unknown routes return a JSON 404", async () => {
  const response = await fetch(`${baseUrl}/api/not-a-route`);

  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: "Route not found" });
});

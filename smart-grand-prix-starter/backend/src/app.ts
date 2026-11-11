import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";

export const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({
  origin: env.FRONTEND_ORIGIN,
  credentials: true,
}));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "smart-grand-prix-api",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

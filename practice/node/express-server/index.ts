// express and dotenv don't have default exports, so we have to do "* as" imports
// in order for tsc to handle them without errors.
import dotenv from "dotenv";
import express from "express"; 
// @types/express, however, does exports in a sane way.
import { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express()
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

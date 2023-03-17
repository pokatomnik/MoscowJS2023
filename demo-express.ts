// @deno-types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/express-serve-static-core/index.d.ts"
import { Express } from "express-serve-static-core";
// @deno-types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/express/index.d.ts"
import express from "express";

const app: Express = express();

app.get("/", function (_, res) {
  res.send("Hello World");
});

app.listen(3000);

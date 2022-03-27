import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({
    status: "success",
  });
});

app.listen(4000, () => console.log("listening on port 4000"));

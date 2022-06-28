// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ name: "John Doe" });
  } else if (req.method === "POST") {
    const email = req.body.email.toString();
    const password = req.body.password.toString();

    if (!email || !password) {
      res.status(400).json({
        error: "Email and Password are required",
      });
    } else if (email.length > 100 || password.length > 100) {
      res.status(400).json({
        error: "Email and Password must be less than 100 characters",
      });
    } else {
      client.connect();
      const db = client.db("blog");
      const collection = db.collection("users");
      const findResult = collection.find({ email }).toArray();
      findResult.then((result) => {
        if (result.length > 0) {
          res.status(400).json({
            error: "Email already exists",
          });
        } else if (result.length === 0) {
          const insertResult = collection.insertOne({ email, password });
          res.json(insertResult);
        }
      });
    }
  }
}

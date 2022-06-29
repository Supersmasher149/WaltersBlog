import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    client.connect();
    const db = client.db("blog");
    const collection = db.collection("posts");
    const result = await collection.find({}).toArray();
    res.json(result);
  } else if (req.method === "POST") {
    // Checks if the request body is empty
    const Title = req.body.Title.toString();
    const Content = req.body.Content.toString();
    if (!Title || !Content) {
      res.status(400).json({
        error: "Title and Content are required",
      });
    }

    // Checks if the reqquest body is the right sizes
    if (Title.length > 100 || Content.length > 5000) {
      res.status(400).json({
        error:
          "Title must be less than 100 characters and Content must be less than 5000 characters",
      });
    }

    client.connect();
    const db = client.db("blog");
    const collection = db.collection("posts");

    // If Title already exists, return error
    const findResult = await collection.find({ Title }).toArray();
    if (findResult.length > 0) {
      res.status(400).json({
        error: "Title already exists",
      });
    } else if (findResult.length === 0) {
      const insertResult = await collection.insertOne({ Title, Content });
      res.json(insertResult);
    }
  } else {
    res.status(405).end();
  }
}

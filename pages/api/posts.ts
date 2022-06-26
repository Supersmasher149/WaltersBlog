import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    client.connect();
    const db = client.db("blog");
    const collection = db.collection("posts");
    const result = await collection.find({}).toArray();
    res.json(result);
}

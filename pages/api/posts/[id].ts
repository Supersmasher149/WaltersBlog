import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://walter:RJe3GtfJ8HBEewY7@cluster0.stpe9.mongodb.net/blog?retryWrites=true&w=majority"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  client.connect();
  const db = client.db("blog");
  const collection = db.collection("posts");
  const result = await collection.findOne({ _id: new ObjectId(id.toString()) });

  res.json(result);
}

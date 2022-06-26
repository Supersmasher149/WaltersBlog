import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  client.connect();
  client.db("admin").command({ ping: 1 });
  res.send("Connected successfully to server");
  client.close();
}

import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
        res.status(200).json({
            name: "John Doe",
            email: "johndoe@gmail.com",
        });
    } 
import { db } from "@/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function trainer(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(403).json({ success: false, message: "Method not supported" });
  }

  await db.adapter.connect();

  const trainer = await db.adapter.getTrainer(req.query.trainerId as string);

  return res.status(200).json({ success: true, data: trainer });
}
import { db } from "@/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function trainer(req: NextApiRequest, res: NextApiResponse) {
  await db.adapter.connect();

  if (req.method == "GET") {
    const trainer = await db.adapter.getTrainer(req.query.trainerId as string);

    return res.status(200).json({ success: true, data: trainer });
  }

  if (req.method == "PUT") {
    const result = await db.adapter.updateTrainer(req.body);

    return res.status(200).json({ success: result });
  }
}
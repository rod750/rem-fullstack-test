import { db } from "@/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function trainers(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(403).json({ success: false, message: "Method not supported" });
  }

  await db.adapter.connect();

  const trainers = await db.adapter.getTrainers();

  return res.status(200).json({ data: trainers });
}
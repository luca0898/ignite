import { NextApiRequest, NextApiResponse } from "next";

export default function Webhooks(req: NextApiRequest, res: NextApiResponse) {

    res.status(200).json({ ok: true })
}
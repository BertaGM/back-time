import type { Request, Response } from "express";

class PingController {
  getPong(_req: Request, res: Response) {
    res.status(200).json({ message: "🏓" });
  }
}

export default PingController;

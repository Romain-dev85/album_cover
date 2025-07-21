import type { RequestHandler } from "express";
import albumCoverRepository from "./albumCoverRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await albumCoverRepository.readAll();

  res.status(200).json(result);
};

export default { browse };

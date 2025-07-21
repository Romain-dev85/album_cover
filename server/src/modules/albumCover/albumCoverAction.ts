import type { RequestHandler } from "express";
import albumCoverRepository from "./albumCoverRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await albumCoverRepository.readAll();

  res.status(200).json(result);
};

const read: RequestHandler = async (req, res) => {
  const result = await albumCoverRepository.readById(req.params.id);

  if (result) {
    res.json(result);
  } else {
    res.status(404).json("This album doesn't exist");
  }
};

export default { browse, read };

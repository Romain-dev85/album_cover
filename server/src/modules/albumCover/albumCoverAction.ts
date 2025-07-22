import type { RequestHandler } from "express";
import albumCoverRepository from "./albumCoverRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await albumCoverRepository.readAll();

  res.status(200).json(result);
};

const read: RequestHandler = async (req, res) => {
  try {
    const result = await albumCoverRepository.readById(req.params.id);

    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404).json("This album doesn't exist");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

const edit: RequestHandler = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const { artist_name, album_name, cover_url } = req.body;

  if (!artist_name || !album_name || !cover_url) {
    res.sendStatus(400);
    return;
  }

  try {
    const affectedRows = await albumCoverRepository.update({
      id,
      artist_name,
      album_name,
      cover_url,
    });

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

const add: RequestHandler = async (req, res) => {
  const { artist_name, album_name, cover_url } = req.body;

  if (!artist_name || !album_name || !cover_url) {
    res.sendStatus(400);
    return;
  }
  try {
    const result = await albumCoverRepository.create(req.body);

    if (result) {
      res.status(201).json({
        message: `${album_name} has been created successfully`,
      });
    } else {
      res.status(404).json("This album doesn't exist");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

const destroy: RequestHandler = async (req, res) => {
  try {
    const deleteAlbum = await albumCoverRepository.delete(req.params.id);

    if (deleteAlbum) {
      res.status(200).json("This album has been successfully deleted !");
    } else {
      res.status(404).json("Impossible to delete this album");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

export default { browse, read, edit, add, destroy };

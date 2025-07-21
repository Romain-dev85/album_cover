import databaseClient, { type Rows } from "../../../database/client";

class AlbumCoverRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * from album_cover");

    return rows;
  }

  async readById(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM album_cover WHERE id = ?",
      [id],
    );

    return rows[0];
  }
}

export default new AlbumCoverRepository();

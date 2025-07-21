import databaseClient from "../../../database/client";

class AlbumCoverRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * from album_cover");

    return rows;
  }
}

export default new AlbumCoverRepository();

import databaseClient, {
  type Rows,
  type Result,
} from "../../../database/client";
import type { AlbumCover } from "../../types/express/albumCover";

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

  async update(album_cover: AlbumCover) {
    const { id, artist_name, album_name, cover_url } = album_cover;

    const [result] = await databaseClient.query<Result>(
      "UPDATE album_cover SET artist_name = ?, album_name = ?, cover_url = ? WHERE id = ?",
      [artist_name, album_name, cover_url, id],
    );
    return result.affectedRows;
  }
}

export default new AlbumCoverRepository();

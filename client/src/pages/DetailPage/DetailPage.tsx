import { useParams } from "react-router";
import "./DetailPage.css";
import { useEffect, useState } from "react";
import CardCover from "../../components/CardCover/CardCover";

const DetailPage = () => {
  const { id } = useParams();

  const [cover, setCover] = useState<null | AlbumCoverI>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/album-cover/${id}`)
      .then((res) => res.json())
      .then((albumCover) => {
        console.info("Fetched album cover:", albumCover);
        setCover(albumCover);
      });
  }, [id]);

  if (cover)
    return (
      <section className="detail-page-container">
        <h1>Edit or delete album art</h1>
        <article>
          <CardCover
            coverUrl={cover.cover_url}
            artistName={cover.artist_name}
            albumName={cover.album_name}
          />
        </article>
        <article>
          <form>
            <label htmlFor="artist_name">Name of the artist</label>
            <input
              id="artist_name"
              name="artist_name"
              placeholder="Exemple: Nirvana"
            />

            <label htmlFor="album_name">Name of the album</label>
            <input
              id="album_name"
              name="album_name"
              placeholder="Exemple: Nevermind"
            />

            <label htmlFor="cover_url">Image of the album</label>
            <input
              id="cover_url"
              name="cover_url"
              placeholder="Exemple: nervermind_image.png"
            />

            <button type="submit">Valider</button>
          </form>
        </article>
      </section>
    );
};

export default DetailPage;

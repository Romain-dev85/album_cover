import { useEffect, useState } from "react";
import CardCover from "../../components/CardCover/CardCover";
import "./Home.css";
import { Link } from "react-router";

const Home = () => {
  const [covers, setCovers] = useState<AlbumCoverI[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/album-cover")
      .then((res) => res.json())
      .then((albumCover) => setCovers(albumCover));
  }, []);

  return (
    <section className="home-container">
      <div>
        <h1>Iconic Album Covers</h1>
      </div>
      <article>
        {covers.map((cover) => (
          <Link to="/" key={cover.id}>
            <CardCover
              coverUrl={cover.cover_url}
              artistName={cover.artist_name}
              albumName={cover.album_name}
            />
          </Link>
        ))}
      </article>
    </section>
  );
};

export default Home;

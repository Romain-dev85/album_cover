import { useEffect, useState } from "react";
import CardCover from "../../components/CardCover/CardCover";
import "./Home.css";
import { Link } from "react-router";

const Home = () => {
  const [covers, setCovers] = useState<AlbumCoverI[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/album-cover")
      .then((res) => res.json())
      .then((albumCover) => setCovers(albumCover));
  }, []);

  const filteredCovers = covers.filter((cover) => {
    const name = search.toLowerCase();
    return (
      cover.artist_name.toLowerCase().includes(name) ||
      cover.album_name.toLowerCase().includes(name)
    );
  });

  return (
    <section className="home-container">
      <div>
        <h1>Iconic Album Covers</h1>
        <input
          type="text"
          placeholder="Search by artist or album..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>
      <article>
        {filteredCovers.map((cover) => (
          <Link to={`/detail-page/${cover.id}`} key={cover.id}>
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

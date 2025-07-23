import { useNavigate, useParams } from "react-router";
import "./DetailPage.css";
import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import CardCover from "../../components/CardCover/CardCover";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [cover, setCover] = useState<null | AlbumCoverI>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/album-cover/${id}`)
      .then((res) => res.json())
      .then((albumCover) => {
        setCover(albumCover);
      });
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (cover) {
      setCover({ ...cover, [name]: value });
    }
  };

  const handleDelete = () => {
    if (!window.confirm("Do you really want to delete this cover ?")) return;

    fetch(`http://localhost:3310/api/album-cover/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        toast("Cover removed !");
        navigate("/");
      } else {
        toast("Error while deleting.");
      }
    });
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`http://localhost:3310/api/album-cover/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cover),
    }).then((response) => {
      if (response.ok) {
        toast("Modification successful !");
        navigate("/");
      } else {
        toast("Error while editing.");
      }
    });
  };

  if (!cover) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="detail-page-container">
      <h1>Edit or delete album art</h1>
      <section>
        <article>
          <CardCover
            coverUrl={cover.cover_url}
            artistName={cover.artist_name}
            albumName={cover.album_name}
          />
        </article>
        <article>
          <form onSubmit={handleUpdate}>
            <label htmlFor="artist_name">Name of the artist</label>
            <input
              id="artist_name"
              name="artist_name"
              value={cover.artist_name}
              onChange={handleChange}
              placeholder="Exemple: Nirvana"
            />

            <label htmlFor="album_name">Name of the album</label>
            <input
              id="album_name"
              name="album_name"
              value={cover.album_name}
              onChange={handleChange}
              placeholder="Exemple: Nevermind"
            />

            <label htmlFor="cover_url">Image of the album</label>
            <input
              id="cover_url"
              name="cover_url"
              value={cover.cover_url}
              onChange={handleChange}
              placeholder="Exemple: nevermind_image.png"
            />

            <div>
              <button type="button" onClick={handleDelete}>
                Remove <br /> cover
              </button>
              <button type="submit">
                Submit <br />
                modification
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
};

export default DetailPage;

import "./AddCover.css";

const AddCover = () => {
  const handleSubmit = (data: FormData) => {
    const formData = JSON.stringify(Object.fromEntries(data));

    fetch("http://localhost:3310/api/album-cover", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    }).then((res) => res.ok);
  };

  return (
    <section className="add-cover-container">
      <h1>Add album art</h1>
      <form action={handleSubmit}>
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
    </section>
  );
};

export default AddCover;

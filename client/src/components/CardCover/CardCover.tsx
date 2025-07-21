import "./CardCover.css";

interface AlbumCoverI {
  id?: number;
  coverUrl: string;
  artistName: string;
  albumName: string;
}

const CardCover = ({ coverUrl, artistName, albumName }: AlbumCoverI) => {
  return (
    <figure className="card-cover-container">
      <img src={coverUrl} alt={albumName} />
      <figcaption>
        {artistName}
        <br />
        {albumName}
      </figcaption>
    </figure>
  );
};

export default CardCover;

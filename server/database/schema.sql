create table album_cover (
  id int primary key auto_increment not null,
  artist_name varchar(255) not null,
  album_name varchar(255) not null,
  cover_url text not null
);

INSERT INTO album_cover (artist_name, album_name, cover_url)
VALUES 
('Nirvana', 'Nevermind', 'https://media.senscritique.com/media/000008554716/0/nevermind.jpg'),
('PinkFloyd', 'The Dark Side of the Moon', 'https://media.senscritique.com/media/000004795486/0/the_dark_side_of_the_moon.jpg'),
('The Beatles', 'Abbey Road', 'https://media.senscritique.com/media/000006055988/0/abbey_road.jpg');


import 'regenerator-runtime/runtime';

// musician.getAlbums().then(albums => console.log(albums));

class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const response = await fetch(this.albumsUrl);
    const json = await response.json();
		const albums = await json;
    return console.log(albums);
  }
}
const musician = new Musician('https://jsonplaceholder.typicode.com/albums');

musician.getAlbums();


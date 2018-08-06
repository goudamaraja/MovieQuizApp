import { movie } from './movie.js';

export class MovieDb {
    url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=117c7d47cda2ec04ab2304a08f9ebdc6';
    Movies = new Array();

    constructor() {
    }

    GetMovies()
    {
      return fetch(this.url)
      .then((response) => response.json())
      .then((responseJson) => {
        list = new Array();
            responseJson.results.forEach(element => {
            let m = new movie;
            m.name = element.title;
            m.year = element.release_date.substring(0, 4);
            console.log(m);
            list.push(m);
          });
          this.Movies = list;
          console.log(this.Movies);
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
    }
}
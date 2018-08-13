export class Question {
    movie;
    rightAnswer;

    constructor(movie) {
        this.movie = movie;
        this.rightAnswer = Math.floor(Math.random() * 3);
    }
}
'use strict';

const numbersOfMovies = prompt('How many movies would you like to rate?');
const movies = [];

for (let i = 1; i <= numbersOfMovies; i++) {
    const movieName = prompt('Enter the movie name:');
    const movieRating = parseFloat(prompt('Enter the movie rating:'));    

    const movie = {
        name: movieName,
        rating: movieRating
    };
    
    movies.push(movie);
}

console.log('Movies:', movies);

movies.sort((a, b) => b.rating - a.rating);

console.log('Movies sorted by rating (highest to lowest):', movies);

let movieList = '';

movieList += '<ul>'

for (let i = 0; i < movies.length; i++) {
    movieList += '<li>';
    movieList += movies[i].name;
    movieList += ' : ';
    movieList += movies[i].rating;
    movieList += '</li>';

}

movieList += '</ul>';

document.querySelector('#listing').innerHTML= movieList

document.querySelector('#highest').innerHTML = `
The highest rated movie is "${movies[0].name}".
`;
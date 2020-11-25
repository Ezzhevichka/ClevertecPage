//FILMS
document.addEventListener('DOMContentLoaded', () => {
    { //ОПИСАНИЕ
        const addForm = document.querySelector('.add-films'),
            addInput = addForm.querySelector('.adding-input-films'),
            movieList = document.querySelector('.promo-films'),
            deleteMovies = addForm.querySelector('.delete-films');

        let movieDB = {
            movies: [],
        };
        //СОБЫТИЕ ФОРМЫ
        addForm.addEventListener('submit', evt => {
            evt.preventDefault();

            let newFilm = addInput.value;

            if (newFilm) {

                if (newFilm.length > 22) {
                    newFilm = `${newFilm.substring(0, 21)}...`;
                }
                movieDB.movies.push(newFilm.toUpperCase());
                if (movieDB.movies.length > 5) {
                    movieDB.movies.length = 5;
                    alert('Вы ввели больше, чем вам доступно');
                }
                createMovieList(movieDB.movies, movieList);
            }

            evt.target.reset();
        });
        //СОЗДАНИЕ СПИСКА
        function createMovieList(films, parent) {
            parent.innerHTML = "";

            films.forEach((film, i) => {
                parent.innerHTML += `
         <li class="promo-item"> ${film}
         </li>
          `;
            });
        }
        //УДАЛЕНИЕ ЭЛЕМЕНТА
        deleteMovies.addEventListener('click', (event) => {
            event.preventDefault();
            movieDB.movies.splice(-1, 1);
            if (movieDB.movies.length === 0) {
                alert('Вы удалили все фильмы')
            }

            createMovieList(movieDB.movies, movieList);
        });

        createMovieList(movieDB.movies, movieList);
    }
});
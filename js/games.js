//GAMES
document.addEventListener('DOMContentLoaded', () => {
    { //ОПИСАНИЕ
        const addFormGames = document.querySelector('.add-games'),
            addInputGames = addFormGames.querySelector('.adding-input-games'),
            gameList = document.querySelector('.promo-games'),
            deleteGames = addFormGames.querySelector('.delete-games');

        const gamesDB = {
            games: []
        };
        //СОБЫТИЕ ФОРМЫ
        addFormGames.addEventListener('submit', (e) => {
            e.preventDefault();

            let newGame = addInputGames.value;

            if (newGame) {

                if (newGame.length > 21) {
                    newGame = `${newGame.substring(0, 22)}...`;
                }
                gamesDB.games.push(newGame.toUpperCase());
                if (gamesDB.games.length > 5) {
                    gamesDB.games.length = 5;
                    alert('Вы ввели больше, чем вам доступно')
                }
                createGamesList(gamesDB.games, gameList);
            }

            e.target.reset();
        });
        //СОЗДАНИЕ СПИСКА
        function createGamesList(game, parent) {
            parent.innerHTML = "";

            game.forEach((game, i) => {
                parent.innerHTML += `
         <li class="promo-games"> ${game}
         </li>
          `;
            });
        };
        //УДАЛЕНИЕ ЭЛЕМЕНТА
        deleteGames.addEventListener('click', (et) => {
            et.preventDefault();
            gamesDB.games.splice(-1, 1);
            if (gamesDB.games.length === 0) {
                alert('Вы удалили все игры')
            }

            createGamesList(gamesDB.games, gameList);
        });

        createGamesList(gamesDB.games, gameList);
    }
});

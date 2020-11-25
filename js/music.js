//MUSIC
document.addEventListener('DOMContentLoaded', () => {
    { //ОПИСАНИЕ
        const addFormMusic = document.querySelector('.add-music'),
            addInputMusic = addFormMusic.querySelector('.adding-input-music'),
            musicList = document.querySelector('.promo-music'),
            deleteMusic = addFormMusic.querySelector('.delete-music');

        let musicDB = {
            songs: []
        };
        //СОБЫТИЕ ФОРМЫ
        addFormMusic.addEventListener('submit', (ev) => {
            ev.preventDefault();

            let newSong = addInputMusic.value;

            if (newSong) {

                if (newSong.length > 20) {
                    newSong = `${newSong.substring(0, 21)}...`;
                }
                musicDB.songs.push(newSong.toUpperCase());
                if (musicDB.songs.length > 5) {
                    musicDB.songs.length = 5;
                    alert('Вы ввели больше, чем вам доступно')
                }
                createMusicList(musicDB.songs, musicList);
            }

            ev.target.reset();
        });
        //СОЗДАНИЕ СПИСКА
        function createMusicList(musics, parent) {
            parent.innerHTML = "";

            musics.forEach((music, i) => {
                parent.innerHTML += `
         <li class="promo-songs"> ${music}
         </li>
          `;
            });
        };
        //УДАЛЕНИЕ ЭЛЕМЕНТА
        deleteMusic.addEventListener('click', (eve) => {
            eve.preventDefault();
            musicDB.songs.splice(-1, 1);
            if (musicDB.songs.length === 0) {
                alert('Вы удалили все песни')
            }

            createMusicList(musicDB.songs, musicList);
        });

        createMusicList(musicDB.songs, musicList);
    }
});
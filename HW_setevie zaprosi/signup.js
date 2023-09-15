//***********HW******** *
// 1 уровень сложности: 1.    Сделать авторизацию по username и email, используя следующий url: https://jsonplaceholder.typicode.com/users. Для авторизации передавать query параметры username и email. Ответ обрабатывать с помощью async await. Если приходит пустой массив значит такого пользователя нет – показываем “Такого пользователя не существует.” 1.1 ** Сделать динамическую валидацию, то есть валидация показывается сразу при начале печати и подсказывает, что поле заполнено верно, если поле заполнено верно.


// После успешного входа отображать данные о пользователе в карточке, а именно: id, name, username, email, phone, website. При этом давать пользователю редактировать поле website.

// *** После успешной авторизации так же должна появиться кнопка “Search”, при клике на которую вы переходите на след. страницу. На этой странице еще три кнопки “Albums”, “Todos”, “Posts”. При клике на каждую вы переходите на страницу поиска с панелью поиска в виде инпута. При вводе каких-либо символов должны отображаться результаты поиска. Например если вы на странице Todos, поиск должен быть по значению title, если на странице Albums, то поиск происходит тоже по значению title и на поиске Posts тоже по полю title.
//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/albums
//https://jsonplaceholder.typicode.com/todos




const loginForm = document.querySelector('#login-form');
        const validation = document.querySelector('#validation');

        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const username = document.querySelector('#username').value;
            const email = document.querySelector('#email').value;

            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`);
            const data = await response.json();

            if (data.length === 0) {
                validation.textContent = 'user is not exist';
            } else {
                window.location.href = `profile.html?username=${username}&email=${email}`;
            }
            console.log(response);
        });

       //dinamik validacia
        document.getElementById('username').addEventListener('input', function() {
            const username = this.value;
            if (username.length >= 3) {
                this.setCustomValidity(''); // pri osibke otchishaem 
            } else {
                this.setCustomValidity('user name match min 3 symbol');
            }
            
        });

        
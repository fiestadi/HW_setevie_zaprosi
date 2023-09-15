const albumsButton = document.querySelector("#albumsButton");
   const todosButton = document.querySelector("#todosButton");
   const postsButton = document.querySelector("#postsButton");

   albumsButton.addEventListener("click", () => {
       // perechod na stranicu Albums
       window.location.href = "search_albums.html";
   });

   todosButton.addEventListener("click", () => {
       // perechod na stranicu Todos
       window.location.href = "search_todos.html";
   });

   postsButton.addEventListener("click", () => {
       // perechod na stranicu Posts
       window.location.href = "search_posts.html";
   });





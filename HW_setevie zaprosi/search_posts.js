const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const searchResults = document.querySelector("#searchResults");

searchButton.addEventListener("click", () => {
    const searchText = searchInput.value;
    
 // chistka ot predidushich rezultatov
    searchResults.innerHTML = "";

    // vipolnenie poiska po funkcii i otobrazhenie resultata
    performSearchPosts(searchText);
});

function performSearchPosts(searchText) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
           //filtr otobrazhenia rezultata
            const filteredResults = data.filter((post) => post.title.includes(searchText));

            if (filteredResults.length === 0) {
                const noResultsMessage = document.createElement("p3");
                noResultsMessage.textContent = "No result to display.";
                searchResults.appendChild(noResultsMessage);
            } else {
                filteredResults.forEach((album) => {
                    const resultItem = document.createElement("div");
                    resultItem.textContent = album.title;
                    searchResults.appendChild(resultItem);
                });
            }
        })
        .catch((error) => {
            console.error("Error API:", error);
        });
}
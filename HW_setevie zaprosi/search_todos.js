const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const searchResults = document.querySelector("#searchResults");

searchButton.addEventListener("click", () => {
    const searchText = searchInput.value;
    
 // chistka ot predidushich rezultatov
    searchResults.innerHTML = "";

    // vipolnenie poiska po funkcii i otobrazhenie resultata
    performSearchTodos(searchText);
});

function performSearchTodos(searchText) {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
           //filtr otobrazhenia rezultata
            const filteredResults = data.filter((todos) => todos.title.includes(searchText));

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
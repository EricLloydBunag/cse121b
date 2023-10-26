const animeDisplay = document.getElementById('anime');
const quoteDisplay = document.getElementById('quote');
const characterDisplay = document.getElementById('character');

function generateQuote() {
    fetch("https://animechan.xyz/api/random")
        .then((response) => response.json())
        .then((data) => {
            animeDisplay.textContent = `${data.anime}`;
            quoteDisplay.textContent = `${data.quote}`;
            characterDisplay.textContent = `${data.character}`;
        })
        .catch((error) => {
            quoteDisplay.textContent = "An error occurred while fetching the quote.";
            console.error('Error:', error);
        });
}


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=69b1ed4176de461ca39d2b73f3da3439";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainter = document.querySelector(".results");

async function getRawg() {
    try {

        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        resultsContainter.innerHTML = ""

        for (let i = 0; i < games.length; i++) {
            console.log(games[i].name);
            console.log(games[i].rating);
            console.log(games[i].tags.length);
            if (i === 8) {
                break;
            }

            resultsContainter.innerHTML += `<div class="result">Name: ${games[i].name}<br>Rating: ${games[i].rating}<br>Tags: ${games[i].tags.length}</div>`;

        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}

getRawg();
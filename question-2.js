// q2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const facts = data.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i].text);
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result">
      <h4 class="title">Name: ${facts[i].name}</h4>
      <p class="rating">Rating: ${facts[i].rating}</p>
      <p class="tags">Tags: ${facts[i].tags.length}</p>
      </div>`;
    }
  } catch (error) {
    console.log(error);
    console.log("an error occured! ohno!");
    resultsContainer.innerHTML = displayError(
      "List of Games not found! An error occurred when calling the API"
    );
  } finally {
    console.log("finally");
  }
}

getGames();

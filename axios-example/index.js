const axios = require("axios");

const fetchJoke = async () => {
    const jokeResponse = await axios.get("http://api.icndb.com/jokes/random?firstName=Shortcut");
    console.log("Response data:", jokeResponse.data);
    return jokeResponse.data.value.joke;
}

(async () => {
    const joke = await fetchJoke();
    console.log(joke);
})();

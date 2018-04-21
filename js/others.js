var jokeContainer = document.querySelector("#api-result");
fetch("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten")
  .then(function(response) {
    return response.json();
  })
  .then(function(jokes) {
    jokes.forEach(joke => {
      // console.log(joke.setup + ": " + joke.punchline);
      var jokeList = document.createElement("li");
      jokeList.innerHTML = joke.setup + "====>" + joke.punchline;
      jokeContainer.appendChild(jokeList);
    });
  });

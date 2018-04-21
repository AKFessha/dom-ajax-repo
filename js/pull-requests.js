var pullRequestList = document.querySelector("#pull-requests-list");
function outputList(resultsArray) {
  console.log(resultsArray);
  resultsArray.forEach(function(pullRequest) {
    var a = document.createElement("a");
    a.setAttribute("href", pullRequest.html_url);
    var linkText = document.createTextNode(pullRequest.title);
    a.appendChild(linkText);

    var listElements = document.createElement("li");
    listElements.appendChild(a);
    pullRequestList.appendChild(listElements);
  });
}
fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
  .then(function(response) {
    return response.json();
  })
  .then(function(pullRequests) {
    var resultsArray = [];
    pullRequests.forEach(function listingPullRequest(pullRequest) {
      //  if (pullRequest.user.id === 31638686) {
      //  }
      resultsArray.push(pullRequest);
    });
    outputList(resultsArray);
    var mySearch = document.querySelector("#mySearch");

    mySearch.addEventListener("keyup", function(event) {
      const value = event.target.value;
      pullRequestList.innerHTML = "";
      pullRequests.forEach(function(pullRequest) {
        // console.log(pullRequest.user.login);
        // console.log(value);
        //  console.log(pullRequest.user.login.search(value));

        if (
          pullRequest.user.login.toLowerCase().search(value.toLowerCase()) !==
          -1
        ) {
          var a = document.createElement("a");
          a.setAttribute("href", pullRequest.html_url);
          var linkText = document.createTextNode(pullRequest.title);
          a.appendChild(linkText);

          var listElements = document.createElement("li");
          listElements.appendChild(a);
          pullRequestList.appendChild(listElements);
        }
      });
    });
  });

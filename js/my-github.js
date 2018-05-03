// Write code here to communicate with Github
var searchBtn = document.querySelector("#searchBtn");
var search = document.querySelector("#search");
var repoList = document.querySelector("#repos-list");
function fetchUser(userName) {
  repoList.innerHTML = "";
  var url = "https://api.github.com/users/" + userName + "/repos";

  var reposCount = document.querySelector("#repos-count");
  fetch(url)
    .then(response => response.json())
    .then(repos => {
      repos.forEach(repo => {
        var a = document.createElement("a");
        a.setAttribute("href", repo.html_url);
        a.innerHTML = repo.name;
        // var linkText = document.createTextNode(repo.name);
        // a.appendChild(linkText);

        var listElements = document.createElement("li");
        listElements.appendChild(a);
        repoList.appendChild(listElements);
      });
      reposCount.innerHTML = repos.length;
    });
}
fetchUser("akfessha");

searchBtn.addEventListener("click", function() {
  var userName = "akfessha";
  if (search.value.length > 0) {
    var userName = search.value;
  }
  fetchUser(userName);
});

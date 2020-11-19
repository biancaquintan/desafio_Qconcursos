const urlProfile = "https://api.github.com/users/biancaquintan"
const urlRepos = "https://api.github.com/users/biancaquintan/repos"

fetch(urlProfile)
.then(response => response.json())
.then(data => {

    let avatar = document.getElementById('avatar')
    let profile_link = document.getElementById('profile')
    let nick = document.getElementById('nick')
    let repos = document.getElementById('repos')
    let followers = document.getElementById('followers')
    let following = document.getElementById('following')
    
    avatar.setAttribute("src", `${data.avatar_url}`);    
    profile_link.setAttribute("href", `${data.html_url}`);

    nick.innerHTML = `${data.login}`
    repos.innerHTML = `<em>${data.public_repos}</em>`
    followers.innerHTML = `<em>${data.followers}</em>`
    following.innerHTML = `<em>${data.following}</em>`

}).catch(error => console.log(error))

fetch(urlRepos)
.then(response => response.json())
.then(data => {

    let tableInfo = document.getElementById('tableRepos')
    var i

    for (i = 0; i < data.length; i++) {
        var newChild = `<tr><td>${data[i].name}</td></tr>`;
        tableInfo.insertAdjacentHTML('beforeend', newChild);
    }

}).catch(error => console.log(error))

function showList() {
    document.getElementById("repos-list").style.display = "unset";
}
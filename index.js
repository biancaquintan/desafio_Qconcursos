const urlProfile = "https://api.github.com/users/biancaquintan"
const urlRepos = "https://api.github.com/users/biancaquintan/repos"
const urlStars = "https://api.github.com/users/biancaquintan/starred"

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

    let tableInfo = document.getElementById('infoRepos')
    var i

    for (i = 0; i < data.length; i++) {
        var newChild = `<tr>
                            <td>${data[i].name}</td>
                            <td><a href='${data[i].html_url}' 
                                   title="Abrir repositório no GitHub" 
                                   target="_blank">
                                   <i class="fa fa-arrow-right"></i>
                                </a>
                            </td>
                        </tr>`;
        tableInfo.insertAdjacentHTML('beforeend', newChild);
    }

}).catch(error => console.log(error))

fetch(urlStars)
.then(response => response.json())
.then(data => {

    let tableInfo = document.getElementById('infoStarred')
    var i

    for (i = 0; i < data.length; i++) {
        var newChild = `<tr>
                            <td>${data[i].name}</td>
                            <td><a href='${data[i].html_url}' 
                                    title="Abrir repositório no GitHub" 
                                    target="_blank">
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                            </td>
                        </tr>`;
        tableInfo.insertAdjacentHTML('beforeend', newChild);
    }

}).catch(error => console.log(error))

function showRepos() {
    document.getElementById("starred-list").style.display = "none";
    document.getElementById("repos-list").style.display = "unset";
}

function showStars() {
    document.getElementById("repos-list").style.display = "none";
    document.getElementById("starred-list").style.display = "unset";
}

var mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


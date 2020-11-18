var request = new XMLHttpRequest();

request.onload = getData;
request.open('get', 'https://api.github.com/users/biancaquintan')
request.send()

function getData() {
    var responseObj = JSON.parse(this.responseText);

    let avatar = document.getElementById('avatar')
    let profile_link = document.getElementById('profile')
    let nick = document.getElementById('nick')
    let repos = document.getElementById('repos')
    let followers = document.getElementById('followers')
    let following = document.getElementById('following')
    
    avatar.setAttribute("src", `${responseObj.avatar_url}`);    
    profile_link.setAttribute("href", `${responseObj.html_url}`);

    nick.innerHTML = `${responseObj.login}`
    repos.innerHTML = `<em>${responseObj.public_repos}</em>`
    followers.innerHTML = `<em>${responseObj.followers}</em>`
    following.innerHTML = `<em>${responseObj.following}</em>`
}
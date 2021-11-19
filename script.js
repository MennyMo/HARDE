let el = document.getElementById("wrapper");
let toggleButton = document.getElementById("menu-toggle");
let users = document.querySelector("#users");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let total = document.querySelector("#total");
let getMale = document.querySelector("#get-male");

window.onload = async () => {
   await getPage();
   await fetchData();
   await renderPage()
}
 

let user_data = [];
let page = 1;

function getPage() {
  page = Number(location.hash.slice(1)) || page;
  // console.log(page)
}
window.onhashchange = async () => {
    await getPage();
    await renderPage()
 };
//  console.log(page);

async function fetchData() {
  user_data = await fetch("https://randomuser.me/api/?results=50");
  user_data = await user_data.json();
  user_data = user_data.results;

  // console.log(user_data);
}

function renderPage() {
  let start = (page - 1) * 20;
  let end = page * 20;
  console.log(user_data);

  let renderData = user_data.slice(start, end);
  total.textContent = renderData.length;
  let numberOfMale = 0;
  let numberOfFemale = 0;

  users.innerHTML = '';

  for (let user of renderData) {
    if (user.gender === "male") {
      numberOfMale += 1;
    } else {
      numberOfFemale += 1;
    }

    users.innerHTML += `<div class = "col-md-3 mb-3">
        <div class="card">
                <img src= ${user.picture.medium} class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                  <p class="card-text">${user.gender}</p>
                  <p class="card-text"><small class="text-muted">${user.login.username}</small></p>
                </div>
              </div>
        </div>
   `;
  }
  male.textContent = numberOfMale;
  female.textContent = numberOfFemale;
}

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

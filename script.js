let el = document.getElementById("wrapper");
let toggleButton = document.getElementById("menu-toggle");
let users = document.querySelector('#users');
let male = document.querySelector('#male');
let female = document.querySelector('#female');
let total = document.querySelector('#total');
let getMale = document.querySelector('#get-male');


let user_data = [];

let data = async() => {
user_data = await  fetch('https://randomuser.me/api/?results=50')
user_data = await user_data.json(); 
user_data = user_data.results;

total.textContent = user_data.length
let numberOfMale = 0
let numberOfFemale = 0


for(let user of user_data){
    if(user.gender === 'male') {
        numberOfMale += 1
    }    else {
        numberOfFemale += 1
    }       
    
    users.innerHTML += `<div class = "col-md-3 mb-3">
        <div class="card">
                <img src= ${user.picture.large} class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                  <p class="card-text">${user.gender}</p>
                  <p class="card-text"><small class="text-muted">${user.login.username}</small></p>
                </div>
              </div>
        </div>
   ` 

//    getMale.addEventListener('click', () => {
//     if(user.gender === 'male') {
//         users.innerHTML += `<div class = "col-md-3 mb-3">
//         <div class="card">
//                 <img src= ${user.picture.large} class="card-img-top" alt="image">
//                 <div class="card-body">
//                   <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
//                   <p class="card-text">${user.gender}</p>
//                   <p class="card-text"><small class="text-muted">${user.login.username}</small></p>
//                 </div>
//               </div>
//         </div>
//    ` 
//     } return 

// })
}
male.textContent = numberOfMale
female.textContent = numberOfFemale
// console.log(user_data);
}
data();



toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};
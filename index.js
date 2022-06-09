// 1. API url //
const url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch users from the API url
function fetchUsers(){
    // 2.1 Make use of the browser fetch API
    fetch(url).then((response) => response.json())
    .then((data) => {
        //passing the user data to the renderUsers function
        renderUsers(data);
    });
}


//3. Render the users in the DOM
function renderUsers(usersData){
    const ul = document.getElementById("user-list-container");

    //3.1 Render an li tag for each of the users
    usersData.forEach((user, index) => {
        console.log(user, index + 1);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
        //3.2 Apend the current user li tag to the ul tag
        ul.appendChild(li);
    });
}

//Add a search function to the DOM 
function searchUsersByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li"); //returns an array of the li tags

//Looping through all the users and rendering the ones that matches the search input
for(i = 0; i < usersList.length; i++){
    const usernameSpanTAg = usersList[i].querySelector('.username');
    const usernameSpanTagValue = usernameSpanTAg.innerText.toUpperCase();
    isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
    if(isMatch){
        usersList[i].style.display = "block";
    } else{
        usersList[i].style.display = "none";
    }
}
}
//Calling the fetch function
fetchUsers();
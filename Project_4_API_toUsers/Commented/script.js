// Project 4 API to get users from jsonplaceholder

// Declare the API url:
const apiUrl = `https://jsonplaceholder.typicode.com/users`; // This is a varible that declasers the API url.

// Function to fetch data from the API url
function fetchUsers() {
  // declaring a function with a name fetchUsers that will fetch the API url
  fetch(apiUrl) // Using the `fetch()` command to get the API URL declared at the top of the code
    .then((response) => response.json()) // using the `.then()` method to handle the response, naming it response and convert it to JSON format
    .then((users) => {
      // using the `.then()` method to handle the response, naming it users
      renderUsers(users); // calling the renderUsers function to render the users
      setUpSearch(users); // calling the setUpSearch function to set up the search
    })
    .catch((error) => {
      //simple catch error block, if there is an error, it will log the error to the console
      console.error('Error fetching API Data users', error); // logging the error to the console `,error` is the error message
    });
}

// Function to render users
function renderUsers(users) {
  // declaring a function with a name renderUsers This will create the HTML element to display the users
  users.forEach((user) => {
    // Using dot notation - call the users array and applying the javascript forEach method.  we now arrow function named user and the return is listItem( which calls the function `createUserListItem` with the parameter user) and usersList
    const listItem = createUserListItem(user); // calling the createUserListItem function to create the list item
    usersList.appendChild(listItem); // appending the list item to the usersList
  });
}

// Create a list item for a user
function createUserListItem(user) {
  const listItem = document.createElement('ul');

  const firstLetterCap = user.name.charAt(0).toUpperCase();
  const icon = document.createElement('span');
  icon.textContent = firstLetterCap;
  icon.style.fontWeight = 'bold';
  icon.style.marginRight = '10px';

  listItem.appendChild(icon);
  listItem.innerHTML += `<span>Name: ${user.name}  Email: ${user.email}  Company: ${user.company?.name}</span>`;

  return listItem;
}

// Function to display the reults on the HTML
function displayResults(users) {
  usersList.innerHTML = '';

  if (users.length > 0) {
    renderUsers(users);
  } else {
    usersList.innerHTML = '<p>No results found.</p>';
  }
}

// Fucntion to set up the search
function setUpSearch(users) {
  searchInput.addEventListener('input', () => {
    const searchInputLower = searchInput.value.toLowerCase().trim();
    const matchingUsers =
      searchInputLower === '' ? users : filterUsers(users, searchInputLower);

    displayResults(matchingUsers);
  });
}

// Function to filter users based on search input
function filterUsers(users, searchInputLower) {
  return users.filter((user) => {
    return Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchInputLower),
    );
  });
}

fetchUsers();

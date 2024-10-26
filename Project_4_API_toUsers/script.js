// Project 4 API to get users from jsonplaceholder

// Declare the API url:
const apiUrl = `https://jsonplaceholder.typicode.com/users`;

// Function to fetch data from the API url
function fetchUsers() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((users) => {
      renderUsers(users);
      setUpSearch(users);
    })
    .catch((error) => {
      console.error('Error fetching API Data users', error);
    });
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

// Function to display the reults on the HTML
function displayResults(users) {
  // resultDiv.innerHTML = ''; //TODO: Remove this line or figure out why it does not work

  if (users.length > 0) {
    renderUsers(users);
  } else {
    resultDiv.innerHTML = '<p>No results found.</p>'; //TODO:  figure out why it does not work
  }
}

// Function to render users
function renderUsers(users) {
  usersList.innerHTML = '';
  users.forEach((user) => {
    const listItem = createUserListItem(user);
    usersList.appendChild(listItem);
  });
}

// Create a list item for a user
function createUserListItem(user) {
  const listItem = document.createElement('li');

  const firstLetterCap = user.name.charAt(0).toUpperCase();
  const icon = document.createElement('span');
  icon.textContent = firstLetterCap;
  icon.style.fontWeight = 'bold';
  icon.style.marginRight = '10px';

  listItem.appendChild(icon);
  listItem.innerHTML += `<span>Name: ${user.name}  Email: ${user.email}  Company: ${user.company?.name}</span>`;

  return listItem;
}

fetchUsers();

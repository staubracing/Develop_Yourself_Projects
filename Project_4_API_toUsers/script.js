// Project 4 API to get users from jsonplaceholder
const apiUrl = `https://jsonplaceholder.typicode.com/users`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((users) => {
    renderUsers(users);

    searchInput.addEventListener('input', () => {
      const searchInputLower = searchInput.value.toLowerCase().trim();

      if (searchInputLower === '') {
        resultDiv.innerHTML = '';
        renderUsers(users);
        return;
      }

      const matchingUsers = users.filter((user) => {
        return Object.values(user).some((value) =>
          value.toString().toLowerCase().includes(searchInputLower)
        );
      });

      //display on the HTML
      resultDiv.innerHTML = '';

      if (matchingUsers.length > 0) {
        renderUsers(matchingUsers);
      } else {
        resultDiv.innerHTML = '<p>No results found.</p>';
      }
    });
  })
  .catch((error) => {
    console.error('Error fetching API data:', error);
  });

// Function to render users
function renderUsers(users) {
  usersList.innerHTML = ''; // Clear existing list
  users.forEach((user) => {
    const listItem = document.createElement('ul');
    listItem.innerHTML = `
      <img src="https://via.placeholder.com/50" alt="${user.name}" style="width:50px;height:50px;border-radius:50%;margin-right:10px;">
      <span>Name: ${user.name}  Email: ${user.email}  Company: ${user.company?.name}</span>`;
    usersList.appendChild(listItem);
  });
}

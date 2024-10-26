// Project 4 API to get users from jsonplaceholder
const apiUrl = `https://jsonplaceholder.typicode.com/users`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((users) => {
    renderUsers(users);

    searchInput.addEventListener("input", () => {
      const searchInputLower = searchInput.value.toLowerCase().trim();

      if (searchInputLower === "") {
        resultDiv.innerHTML = "";
        renderUsers(users);
        return;
      }

      const matchingUsers = users.filter((user) => {
        return Object.values(user).some((value) =>
          value.toString().toLowerCase().includes(searchInputLower)
        );
      });

      //display on the HTML
      resultDiv.innerHTML = "";

      if (matchingUsers.length > 0) {
        renderUsers(matchingUsers);
      } else {
        resultDiv.innerHTML = "<p>No results found.</p>";
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching API data:", error);
  });

// Function to render users
function renderUsers(users) {
  usersList.innerHTML = "";
  users.forEach((user) => {
    const listItem = document.createElement("li"); // Changed to 'li' for list item

    // Extract the first letter of the user's name
    const firstLetter = user.name.charAt(0).toUpperCase();

    // Create a span element to act as the icon
    const icon = document.createElement("span");
    icon.textContent = firstLetter;
    icon.style.fontWeight = "bold"; // Example styling
    icon.style.marginRight = "10px"; // Space between icon and name

    // Append the icon to the list item
    listItem.appendChild(icon);

    // Append the user's details to the list item
    listItem.innerHTML += `
      
      <span>Name: ${user.name}  Email: ${user.email}  Company: ${user.company?.name}</span>`;

    // Append the list item to the users list
    usersList.appendChild(listItem);
  });
}

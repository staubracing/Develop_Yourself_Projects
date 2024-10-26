// Project 4 API to get users from jsonplaceholder
const url = `https://jsonplaceholder.typicode.com/users`;

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      const markup = `<li>${user.name}<li>`;
      document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    });
  })
  .catch((error) => {
    console.error(error);
  });

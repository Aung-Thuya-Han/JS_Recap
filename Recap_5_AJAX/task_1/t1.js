async function getUser() {
  const url = 'https://reqres.in/api/users/1';

  const options = {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  };

  const response = await fetch(url, options);
  const userData = await response.json();

  console.log(userData);
}

getUser();

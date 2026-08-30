async function createUser() {
  const url = 'https://reqres.in/api/users';

  const user = {
    name: 'Aung',
    job: 'Student',
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
    body: JSON.stringify(user),
  };

  const response = await fetch(url, options);
  const userData = await response.json();

  console.log(userData);
}

createUser();

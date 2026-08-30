async function getNonExist() {
  const url = 'https://reqres.in/api/unknown/23';

  const options = {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

getNonExist();

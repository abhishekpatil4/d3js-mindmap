const fetch = require('node-fetch');

fetch('')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // You can access and use the fetched data here
  })
  .catch(error => {
    console.log('Error:', error);
  });

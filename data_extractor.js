const fs = require('fs');

async function fetchData(url) {
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default(url);
    let data = await response.json();
    data = data.map(({ name, url }) => ({ name, url }));
    return data;
    // You can access and use the fetched data here
  } catch (error) {
    console.log('Error:', error);
  }
}



async function extractData(url) {
  let data = await fetchData(url);
  for (const item of data) {
    const isFile = item.url.lastIndexOf('.') > item.url.lastIndexOf('/');
    if (isFile) {
      console.log(`${item.name} is a file.`);
    } else {
      console.log(`${item.name} is a directory.`);
      let temp = await fetchData(item.url);
      item.children = temp;
      // console.log(temp);
    }
  }
  // console.log(data);
  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('An error occurred while writing the file:', err);
      return;
    }
    console.log('JSON file has been created successfully.');
  });

}

extractData('https://api.github.com/repos/abhishekpatil4/gitglance/contents'); //fetching actual repo data

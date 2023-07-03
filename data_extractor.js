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
  
  

  async function extractData(){
    let data = await fetchData('https://api.github.com/repos/abhishekpatil4/gitglance/contents');  //fetching actual repo data
    for (const item of data) {
        const isFile = item.url.lastIndexOf('.') > item.url.lastIndexOf('/');
        
        if (isFile) {
          console.log(`${item.name} is a file.`);
        } else {
          console.log(`${item.name} is a directory.`);
          let temp = await fetchData(item.url);
          console.log(temp);
        }
      }
  }

  extractData();
  
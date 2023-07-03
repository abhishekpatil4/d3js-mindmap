async function fetchData() {
    try {
      const fetch = await import('node-fetch');
      const response = await fetch.default('https://api.github.com/repos/abhishekpatil4/gitglance/contents');
      let data = await response.json();
      data = data.map(({ name, url }) => ({ name, url }));
      console.log(data);
      // You can access and use the fetched data here
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  

  function extractData(){
    fetchData();  
  }
  
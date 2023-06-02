const getData = async () => {
    try {
      const response = await fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=78c2cbff&app_key=13f6dea834e445bf35c85179720ff0f4&category=generic-foods', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
  
        const results = data.results;
          console.log(results); 
          
      
      } else {
        throw new Error('Erreur de requête');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
 export default getData();
  
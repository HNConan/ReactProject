const LinkApi = {
  getFoodIngredients : async (query) => {
      try {
        /*https://api.edamam.com/api/food-database/v2/parser?app_id=78c2cbff&app_key=13f6dea834e445bf35c85179720ff0f4&category=generic-foods*/
        const response = await fetch('https://api.edamam.com/auto-complete?app_id=78c2cbff&app_key=13f6dea834e445bf35c85179720ff0f4&q='+query, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        
        if (response.ok) {
          const data = await response.json();
          return data;
        
        } else {
          throw new Error('Erreur de requête');
        }
      } catch (error) {
        console.error(error);
        return [];
      }
    },

  getFoodInformations: async (query) => {
    try {
      /*https://api.edamam.com/api/food-database/v2/parser?app_id=78c2cbff&app_key=13f6dea834e445bf35c85179720ff0f4&category=generic-foods*/
      const response = await fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=78c2cbff&app_key=13f6dea834e445bf35c85179720ff0f4&category=generic-foods&ingr='+query, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      
      if (response.ok) {
        const data = await response.json();
        return data;
      
      } else {
        throw new Error('Erreur de requête');
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};
 export default LinkApi;
  
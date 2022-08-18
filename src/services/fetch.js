
const callToApi = () => {
    // Llamamos a la API
    return fetch('https://awesome-profile-cards.herokuapp.com/card', {method: 'POST'})
    
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
         return response;
         
      });
  };
  
  export default callToApi;
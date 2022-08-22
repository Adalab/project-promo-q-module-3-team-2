const callToApi = (data) => {
  // Llamamos a la API
  return fetch("https://awesome-profile-cards.herokuapp.com/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default callToApi;

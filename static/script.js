"use strict";

const BASE_API_URL = "https://localhost:5001/cupcakes/";

async function getAllCupcakes() {
  const response = await fetch(BASE_API_URL,
    {
    method: 'GET',
    }
  );

    return response.cupcakes; // returns list of cupcake objects
}

const cupcakes = await getAllCupcakes();


// list all cupcakes
// handle form submission and updates the list on page
// want cupcake name and URL


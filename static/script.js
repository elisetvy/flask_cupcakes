"use strict";

const BASE_API_URL = "http://localhost:5001/api/cupcakes";
const $cupcakeList = $("#cupcake-list");

async function getAllCupcakes() {
  const response = await fetch(BASE_API_URL,
    {
    method: 'GET',
    }
  );
    const data = await response.json()
    console.log(response, "response")
    console.log(data, "data")
    return data.cupcakes; // returns list of cupcake objects
}

const cupcakes = getAllCupcakes();


// list all cupcakes
function displayCupcakes(){
  //flavor, image, rating, size
  for(const cupcake of cupcakes){
    const $cupcake = $(`<li>${cupcake.flavor}
                        <img width="100px" src=${cupcake.image_url}/>
                        </li>`)

    $cupcakeList.append($cupcake)
  }
}
// handle form submission and updates the list on page
// want cupcake name and URL


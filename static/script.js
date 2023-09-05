"use strict";

const BASE_API_URL = "http://localhost:5001/api/cupcakes";
const $cupcakeList = $("#cupcake-list");
const $cupcakeForm = $("#cupcake-form");

async function getAllCupcakes() {
  const response = await fetch(BASE_API_URL,
    {
    method: 'GET',
    }
  );

  const data = await response.json()

  return data;
}

// list all cupcakes
async function displayCupcakes(){
  const cupcakes = await getAllCupcakes(); // returns object with key "cupcakes"

  for (const cupcake of cupcakes.cupcakes){ // cupcakes.cupcakes is an array with cupcake objects
    const $cupcake = $(`<li>${cupcake.flavor}
                        <img width="100px" src=${cupcake.image_url}/>
                        </li>`)

    $cupcakeList.append($cupcake)
  }
}

async function handleCupcakeFormSubmit() {
  const $flavor = $('#flavor').val()
  const $size = $('#size').val()
  const $rating = $('#rating').val()
  const $image_url = $('#image_url').val()

  await fetch(BASE_API_URL,
    {
      method: "POST",
      body: JSON.stringify({
        "flavor": $flavor,
        "size": $size,
        "rating": $rating,
        "image_url": $image_url
        }),
      headers: {
        "Content-Type": "application/json"
      }
    });
}

$cupcakeForm.on('submit', handleCupcakeFormSubmit())
// handle form submission and updates the list on page
// want cupcake name and URL

displayCupcakes();
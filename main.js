// Elements
const getImageForm = document.getElementById("image-form");
const maxNumImage = document.getElementById("max-num-image");
const inputForImage = document.getElementById("input-number-image");
const imageImg = document.getElementById("duck-image");
const imageCaption = document.getElementById("image-caption");

// ========== Functions
// ----- Set Max Numbers for Input
async function setMaxNumbers() {
  const response = await fetch(
    "https://corsproxy.io/?url=https://random-d.uk/api/list?format=json"
  );
  const data = await response.json();

  maxNumImage.textContent = data.image_count;
  inputForImage.setAttribute("max", data.image_count);
}

// ----- Get Image with Number
async function getImage(event) {
  event.preventDefault();

  try {
    const response = await fetch(
      "https://corsproxy.io/?url=https://random-d.uk/api/list?format=json"
    );
    const data = await response.json();
    console.log(data);

    let inputNumber = Number(inputForImage.value);
    imageImg.setAttribute("src", data.images[inputNumber-1])
  } catch (error) {
    console.log(error);
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", setMaxNumbers);
getImageForm.addEventListener("submit", getImage);






// ========================================================
async function getQuack() {
  const response = await fetch(
    "https://corsproxy.io/?url=https://random-d.uk/api/list?format=json"
  );
  const data = await response.json();
  console.log(data);
  //   const image = document.createElement("img")
  //   image.setAttribute("src", data.url)
  //   duckContainer.appendChild(image)
}

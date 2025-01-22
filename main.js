// ========== Elements
const getImageForm = document.getElementById("image-form");
const maxNumImage = document.getElementById("max-num-image");
const inputForImage = document.getElementById("input-number-image");
const imageImg = document.getElementById("duck-image");
const imageCaption = document.getElementById("image-caption");

const getGifForm = document.getElementById("gif-form");
const maxNumGif = document.getElementById("max-num-gif");
const inputForGif = document.getElementById("input-number-gif");
const gifImg = document.getElementById("duck-gif");
const gifCaption = document.getElementById("gif-caption");

// ========== Functions
// ----- Set Max Numbers for Input
async function setMaxNumbers() {
  try {
    const response = await fetch(
    "https://corsproxy.io/?url=https://random-d.uk/api/list?format=json"
  );
  const data = await response.json();

  maxNumImage.textContent = data.image_count;
  inputForImage.setAttribute("max", data.image_count);

  maxNumGif.textContent= data.gif_count;
  inputForGif.setAttribute("max", data.gif_count);
  } catch (error) {
    console.log(error);
  }
}

// ----- Get Image with Number
async function getImage(event) {
  event.preventDefault();

  try {
    const response = await fetch(
      "https://corsproxy.io/?url=https://random-d.uk/api/list?format=json"
    );
    const data = await response.json();
    // console.log(data);

    let inputNumber = Number(inputForImage.value);
    imageImg.style.display = "inline-block"
    imageImg.setAttribute(
      "src",
      `https://corsproxy.io/?url=https://random-d.uk/api/${data.images[inputNumber - 1]}`);
      imageCaption.textContent = "Powered by random-d.uk";
      imageCaption.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}

// ----- Get Gif with Number
async function getGif(event) {
  event.preventDefault();

  try {
    const response = await fetch(
      "https://corsproxy.io/?url=https://random-d.uk/api/list?format=json"
    );
    const data = await response.json();

    let inputNumber = Number(inputForGif.value);
    gifImg.style.display = "inline-block"
    gifImg.setAttribute(
      "src",
      `https://corsproxy.io/?url=https://random-d.uk/api/${data.gifs[inputNumber - 1]}`);
      gifCaption.textContent = "Powered by random-d.uk";
      gifCaption.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}

// ========== Event Listeners
document.addEventListener("DOMContentLoaded", setMaxNumbers);
getImageForm.addEventListener("submit", getImage);
getGifForm.addEventListener("submit", getGif)






// ========================================================
async function getQuack() {
  const response = await fetch(
    "https://corsproxy.io/?url=https://random-d.uk/api/random?format=json"
  );
  const data = await response.json();
  console.log(data);
  //   const image = document.createElement("img")
  //   image.setAttribute("src", data.url)
  //   duckContainer.appendChild(image)
}

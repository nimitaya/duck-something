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

const randomButton = document.getElementById("random-button");
const randomImg = document.getElementById("random-duck");
const randomCaption = document.getElementById("random-caption");

const bodyElement = document.querySelector("body");
const bgInfo = document.getElementById("bg-information");

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

    maxNumGif.textContent = data.gif_count;
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
    imageImg.style.display = "inline-block";
    imageImg.setAttribute(
      "src",
      `https://corsproxy.io/?url=https://random-d.uk/api/${
        data.images[inputNumber - 1]
      }`
    );
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
    gifImg.style.display = "inline-block";
    gifImg.setAttribute(
      "src",
      `https://corsproxy.io/?url=https://random-d.uk/api/${
        data.gifs[inputNumber - 1]
      }`
    );
    gifCaption.textContent = "Powered by random-d.uk";
    gifCaption.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}

// ----- Get Random
async function getRandom() {
  try {
    const response = await fetch(
      "https://corsproxy.io/?url=https://random-d.uk/api/random?format=json"
    );
    const data = await response.json();

    randomImg.style.display = "inline-block";
    randomImg.setAttribute("src", data.url);
    randomCaption.textContent = "Powered by random-d.uk";
    randomCaption.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}

// ----- give information on Background Pic
function checkBg() {
  switch (checkWidth()) {
    case "mobile":
      bgInfo.textContent = "Background image by: KevinSchmid";
      bgInfo.setAttribute("href", "https://pixabay.com/users/kevinschmid-15711311/")
      break;

    case "desktop":
      bgInfo.textContent = "Background image by: matthiaskost";
      bgInfo.setAttribute("href", "https://pixabay.com/users/matthiaskost-15902545/");
      break;
  
    default:
      bgInfo.textContent = "";
      break;
  }
}

// ----- check window size
function checkWidth() {
  if (window.innerWidth < 768) {
    return "mobile";
  } else if (window.innerWidth >= 768) {
    return "desktop";
  } 
}

// ========== Event Listeners
// Set max Numbers for Inputs
document.addEventListener("DOMContentLoaded", setMaxNumbers);
// Getting Pic, Gif or Random
getImageForm.addEventListener("submit", getImage);
getGifForm.addEventListener("submit", getGif);
randomButton.addEventListener("click", getRandom);
// Change background Information
document.addEventListener("DOMContentLoaded", checkBg);

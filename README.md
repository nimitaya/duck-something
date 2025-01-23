# Ducks Something

## Introduction

Welcome to the Ducks Something project! This project was created to learn and practice using APIs in JavaScript. The application allows users to fetch and display random duck images and gifs based on user input.

## Features
- Fetch and display a random duck image based on a user-provided number.
- Fetch and display a random duck gif based on a user-provided number.
- Fetch and display a completely random duck image or gif.
- Responsive design that adapts to different screen sizes.

## Technologies Used
- HTML
- CSS
- JavaScript
- Fetch API

## Usage
1. Get a Duck Image:
    - Enter a number between 1 and the maximum number displayed.
    - Click the "Get Quack" button to fetch and display a duck image.

2. Get a Duck Gif:
    - Enter a number between 1 and the maximum number displayed.
    - Click the "Get Quacky" button to fetch and display a duck gif.

3. Get a Random Duck:
    - Click the "Get Random Duckies" button to fetch and display a random duck image or gif.

## Project Structure
```
.
├── index.html
├── style.css
├── main.js
└── img
    ├── bg-mobile.jpg
    └── bg-desktop.jpg
```
- index.html: The main HTML file that contains the structure of the web page.
- style.css: The CSS file that contains the styles for the web page.
- main.js: The JavaScript file that contains the logic for fetching and displaying duck images and gifs.
- img: The directory that contains background images for mobile and desktop views.

### Event Listeners
- DOMContentLoaded: Sets the maximum numbers for inputs when the DOM is fully loaded.
- submit (for image form): Fetches and displays a duck image based on user input.
- submit (for gif form): Fetches and displays a duck gif based on user input.
- click (for random button): Fetches and displays a random duck image or gif.

### Functions
- checkBg(): Updates the background image information based on the window size.
- checkWidth(): Checks the window size and returns "mobile" or "desktop".
- setMaxNumbers(): Sets the maximum numbers for the input fields.
- getImage(): Fetches and displays a duck image based on user input.
- getGif(): Fetches and displays a duck gif based on user input.
- getRandomDuck(): Fetches and displays a random duck image or gif.

### Background Image Information
The background image changes based on the window size:
- Mobile: "Background image by: KevinSchmid" ([link to the profile](https://pixabay.com/users/kevinschmid-15711311/))
- Desktop: "Background image by: matthiaskost" ([link to the profile](https://pixabay.com/users/matthiaskost-15902545/))

## Acknowledgements
- Duck images and gifs are fetched from the [Duck API](https://random-d.uk/).
- Background images are sourced from [Pixabay](https://pixabay.com/).
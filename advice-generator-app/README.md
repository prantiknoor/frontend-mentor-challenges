# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

<img src="./screenshots/ss-mobile.png" width="29.3%"><img src="./screenshots/ss-desktop.png" width="69.3%">

### Links

- Solution URL: [GitHub](https://github.com/prantiknoor/frontend-mentor-challenges/tree/master/advice-generator-app)
- Live Site URL: [Vercel](https://advice-generator-app-prantiknoor.vercel.app), [Netlify](https://frontend-mentor-challenges-prantik.netlify.app/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

I used `BEM` _(Body Element Modifier)_ in this project. 

I used `fetch()` function to call the [Advice Slip JSON API](https://api.adviceslip.com/). But first time I used `XMLHttpRequest`, then I switched to that. I also used js `Promise`: 

```js
function fetchAdvice() {
  return new Promise((resolve, reject) => {
    fetch(apiEndpoint, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => resolve(data.slip));
  });
}
```
The function was working fine in **Chrome**. But not working as I wanted in **Firefox**. Then I added ` { cache: "no-cache" }`. Now It's working fine.


### Continued development

By working on this project, I realized I have to practice more. 

### Useful resources

- [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) - Now, I am doing this course.
- [Responsive Web Design - freeCodeCamp](https://www.freecodecamp.org/learn/2022/responsive-web-design/) - This is an amazing course which helped me finally understand HTML & CSS very well. I'd recommend it to anyone new in web development

## Author

- Frontend Mentor - [@prantiknoor](https://www.frontendmentor.io/profile/prantiknoor)
- Twitter - [@prantiknoor](https://www.twitter.com/prantiknoor)
- CodePen - [@prantiknoor](https://codepen.io/prantiknoor)

## Acknowledgments

Thanks to everyone who helped me learning code.

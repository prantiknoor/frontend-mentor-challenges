const ratingCard = document.getElementsByClassName("card")[0];
const thankYouCard = document.getElementsByClassName("card")[1];

const ratingBarElements = document.getElementsByClassName("rating_bar__el");
const ratingInfo = document.getElementById('ratingInfo');

const buttonSubmmit = document.getElementById("button_submit");

var rating;

for (let i = 0; i < ratingBarElements.length; i++) {
  const element = ratingBarElements[i];
  element.addEventListener("click", (event) => giveRating(event, i));
}

function giveRating(event, index) {
  console.log(index);
  rating = index + 1;

  for (let i = 0; i < ratingBarElements.length; i++) {
    const element = ratingBarElements[i];
    if (i < rating) {
        element.classList.add("rating_bar__el--selected");
    } else if(element.classList.contains('rating_bar__el--selected')) {
        element.classList.remove("rating_bar__el--selected");
    }
  }
}

buttonSubmmit.addEventListener('click', submit);

function submit(event) {
    if (rating) {
        ratingCard.setAttribute('hidden', true)
        thankYouCard.classList.add("card--thank-you-state");
        ratingInfo.innerText = `You selected ${rating} out of 5`;
    } else {
       console.log("Please give rating, then submit."); 
    }
}

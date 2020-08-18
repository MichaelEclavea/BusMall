'use strict';

// Global Variables
var parentElement = document.getElementById('products');
var finalList = document.getElementById('ul');
var productArray = [];
var totalClicks = 0;
var maxClicks = 25;
var uniqueArray = [];




function Product (name){
  this.title = `${name}`.slice(0,-4);
  // slice function from StackOverflow: https://stackoverflow.com/questions/952924/javascript-chop-slice-trim-off-last-character-in-string
  this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
  // capitaliation code from: https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript
  this.alt = `${name}`;
  this.filepath = `../img/${name}`;
  this.clicks = 0;
  this.shown = 0;
  productArray.push(this);
}

new Product('bag.jpg');
new Product('banana.jpg');
new Product('bathroom.jpg');
new Product('boots.jpg');
new Product('breakfast.jpg');
new Product('bubblegum.jpg');
new Product('chair.jpg');
new Product('cthulhu.jpg');
new Product('dog-duck.jpg');
new Product('dragon.jpg');
new Product('pen.jpg');
new Product('pet-sweep.jpg');
new Product('scissors.jpg');
new Product('shark.jpg');
new Product('sweep.png');
new Product('tauntaun.jpg');
new Product('unicorn.jpg');
new Product('usb.gif');
new Product('water-can.jpg');
new Product('wine-glass.jpg');


function getRandomImage(){
  var randomIndex = getRandomNumber(productArray.length);
  var chosenImage = productArray[randomIndex];
  chosenImage.shown++;
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.width = 400;
  imageElement.style.padding = '10px';
  // padding code from w3schools" http://webdevable.com/w3schools/jsref/prop_style_padding.html
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);
  
  var radioButton = document.createElement('input');
  radioButton.setAttribute('type', 'radio');
  radioButton.setAttribute('value', chosenImage);
  parentElement.appendChild(radioButton);
  parentElement.appendChild(imageElement);
  console.log(chosenImage.alt);
  
  
}




function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(event){
  parentElement.onclick= totalClicks++;
  console.log('The total clicks were: '+ totalClicks);
  var alt = event.target.alt;

  for(var i=0; i<productArray.length; i++){
    if(alt === productArray[i].alt){
      productArray[i].clicks++;
      productArray[i].shown++;
    }
  }

  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
  getRandomImage();
  if (totalClicks>=maxClicks) {
    parentElement.removeEventListener('click', handleClick);
    for (var j = 0; j < productArray.length; j++){
      var li = document.createElement('li');
      li.textContent = productArray[j].title + ' had ' + productArray[j].clicks + ' votes and was shown ' + productArray[j].shown + ' times.';
      finalList.appendChild(li);
    }
  }
}


parentElement.addEventListener('click', handleClick);



getRandomImage();
getRandomImage();
getRandomImage();

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
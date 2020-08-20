'use strict'
var parentElement = document.getElementById('here');
var parentList = document.getElementById('list')
var Array = [];
var uniqueImageArray = [];
var maxClick = 25;
var totalArray = [];
function Item(filepath, alt, title) {
  this.filepath = filepath;
  this.alt = alt;
  this.title = title;
  this.clickCount = 0;
  this.itemShown = 0;
  Array.push(this);
}
function checkLocalStorage() {
  if (localStorage.getItem('items') === null) {
    createItems();
  } else {
    var getArray = localStorage.getItem('items');
    var parseItem = JSON.parse(getArray);
    Array = parseItem;
  }
}
checkLocalStorage();

function createItems() {
  var bag = new Item('../IMG/bag.jpg', 'bag', 'bag');
  var banana = new Item('../IMG/banana.jpg', 'banana', 'banana');
  var bathroom = new Item('../IMG/bathroom.jpg', 'bathroom', 'bathroom');
  var boots = new Item('../IMG/boots.jpg', 'boots', 'boots');
  var breakfast = new Item('../IMG/breakfast.jpg', 'breakfast', 'breakfast');
  var bubblegum = new Item('../IMG/bubblegum.jpg', 'bubblegum', 'bubblegum');
  var chair = new Item('../IMG/chair.jpg', 'chair', 'chair');
  var cthulhu = new Item('../IMG/cthulhu.jpg', 'cthulhu', 'cthulhu');
  var dogDuck = new Item('../IMG/dog-duck.jpg', 'dog duck', 'dog duck');
  var dragon = new Item('../IMG/dragon.jpg', 'dragon', 'dragon');
  var pen = new Item('../IMG/pen.jpg', 'pen', 'pen');
  var sweep = new Item('../IMG/pet-sweep.jpg', 'pet sweep', 'pet sweep');
  var scissors = new Item('../IMG/scissors.jpg', 'scissors', 'scissors');
  var shark = new Item('../IMG/shark.jpg', 'shark', 'shark');
  var sweep = new Item('../IMG/sweep.png', 'sweep', 'sweep');
  var tauntaun = new Item('../IMG/tauntaun.jpg', 'tauntaun', 'tauntaun');
  var unicorn = new Item('../IMG/unicorn.jpg', 'unicorn', 'unicorn');
  var usb = new Item('../IMG/usb.gif', 'usb', 'usb');
  var waterCan = new Item('../IMG/water-can.jpg', 'water-can', 'water-can');
  var wineGlass = new Item('../IMG/wine-glass.jpg', 'wine glass', 'wine glass')
}
function random() {
  var randomImage = randomNumber(Array.length);
  while (uniqueImageArray.includes(randomImage)) {
    randomImage = randomNumber(Array.length);
  }
  uniqueImageArray.push(randomImage);
  if (uniqueImageArray.length > 6) {
    uniqueImageArray.shift();
  }
  var chooseImage = Array[randomImage];
  chooseImage.itemShown++;
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chooseImage.filepath);
  imageElement.setAttribute('alt', chooseImage.alt);
  imageElement.setAttribute('title', chooseImage.title);
  parentElement.appendChild(imageElement);
}
function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function onClick(event) {
  var alt = event.target.alt;
  maxClick--;
  if (maxClick !== 0) {
    for (var i = 0; i < Array.length; i++) {
      if (alt === Array[i].alt) {
        Array[i].clickCount++;
      }
    }
    parentElement.innerHTML = '';
    random();
    random();
    random();
  }
  else {
    if (jsonArray !== 0){
      var getArray = localStorage.getItem('item');
      var parseItem = JSON.parse(getArray);
      parseItem + Array;
    }
    var jsonArray = JSON.stringify(Array);
    localStorage.setItems('items', jsonArray);
    parentElement.innerHTML = '';
    for (var i = 0; i < Array.length; i++){
      var li = document.createElement('li');
      li.textContent = Array[i].alt + ' had ' + Array[i].clickCount + ' vote(s) and was shown ' + Array[i].itemShown + ' time(s).';
      parentList.appenChild(li);
      chart();    
    }
  }
}
parentElement.addEventListener('click', onClick);
random();
random();
random();


function chart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'],
      datasets: [{
        label: '# of Votes',
        data: totalArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
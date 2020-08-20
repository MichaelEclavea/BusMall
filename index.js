'use strict'

var parentElement = document.getElementById('here');
var parentList = document.getElementById('list');
var itemArray = [];
var uniqueImageArray = [];
var maxClick = 25;
var totalArray = [];
function Item(filepath, alt, title) {
    this.filepath = filepath; 
    this.alt = alt;
    this.title = title;
    this.clickCount = 0; 
    this.itemShown = 0;
    itemArray.push(this);
}
function checkLocalStorage() {
    if (localStorage.getItem('items') === null) {
        createItems();
    } else {
        var getItemArray = localStorage.getItem('items');
        var parseItem = JSON.parse(getItemArray);
        itemArray = parseItem;
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
        var randomImage = randomNumber(itemArray.length);
        while (uniqueImageArray.includes(randomImage)) {
            randomImage = randomNumber(itemArray.length);
        }
        uniqueImageArray.push(randomImage);
        if (uniqueImageArray.length > 6) {
            uniqueImageArray.shift();
        }
        var chooseImage = itemArray[randomImage];
        chooseImage.itemShown++;
        var chooseImage = itemArray[randomImage]
    }  

'use strict';


var parentElement = document.getElementById('here');
var parentList = document.getElementById('list');
var itemArray = [];
var maxClick = 25;
function item(filepath, alt, title) {
    this.filepath = filepath;
    this.alt = alt;
    this.title = title;
    this.clickCount = 0;
    this.ItemShown = 0;
    ItemArray.push(this);
}
new Item('../IMG/bag.jpg', 'bag', 'bag');
new Item('../IMG/banana.jpg', 'banana', 'banana');
new Item('../IMG/bathroom.jpg', 'bathroom', 'bathroom');
new Item('../IMG/boots.jpg', 'boots', 'boots');
new Item('../IMG/breakfast.jpg', 'breakfast', 'breakfast');
new Item('../IMG/bubblegum.jpg', 'bubblegum', 'bubblegum');
new Item('../IMG/chair.jpg', 'chair', 'chair');
new Item('../IMG/cthulhu.jpg', 'cthulhu', 'cthulhu');
new Item('../IMG/dog-duck.jpg', 'dog duck', 'dog duck');
new Item('../IMG/dragon.jpg', 'dragon', 'dragon');
new Item('../IMG/pen.jpg', 'pen', 'pen');
new Item('../IMG/pet-sweep.jpg', 'pet sweep', 'pet sweep');
new Item('../IMG/scissors.jpg', 'scissors', 'scissors');
new Item('../IMG/shark.jpg', 'shark', 'shark');
new Item('../IMG/sweep.png', 'sweep', 'sweep');
new Item('../IMG/tauntaun.jpg', 'tauntaun', 'tauntaun');
new Item('../IMG/unicorn.jpg', 'unicorn', 'unicorn');
new Item('../IMG/usb.gif', 'usb', 'usb');
new Item('../IMG/unicorn.jpg', 'unicorn', 'unicorn');
new Item('../IMG/water-can.jpg', 'water - can', 'water-can');
new Item('../IMG/wine-glass.jpg', 'wine glass', 'wine glass')
function random() {
        var randomImage = randomNumber(ItemArray.length);
        var chooseImage = ItemArray[randomImage];
        chooseImage.ItemShown++;
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
            for (var i = 0; i < ItemArray.length; i++) {
                if (alt === ItemArray[i].alt) {
                    ItemArray[i].clickCount++;
                }
            }
            parentElement.innerHTML = '';
            random();
            random();
            random();
        }
        else {
            parentElement.innerHTML = '';
            for (var i = 0; i < ItemArray.length; i++) {
                var li = document.createElement('li');
      li.textContent = ItemArray[i].alt + ' had ' + ItemArray[i].clickCount + ' vote(s) and was shown ' + ItemArray[i].ItemShown + ' time(s).'
      parentList.appendChild(li);
            }
        }
    }
parentElement.addEventListener('click', onClick);
random();
random();
random();
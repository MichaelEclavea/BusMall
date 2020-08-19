'use strict';

// Global Variables
var parentElement1 = document.getElementById('product1');
var parentElement2 = document.getElementById('product2');
var parentElement3 = document.getElementById('product3');
// var finalList = document.getElementById('ul');
var path = "../img/";
var productArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var totalClicks = 0;
var maxClicks = 25;
var uniqueArray = [];
var views = 0; 



function getRandomImage() {
    var uniqueArray = [];
    var numbers = [];
    while (numbers.length === 0) {
        var num1 = Math.floor(Math.random() * productArray.length);
        var num2 = Math.floor(Math.random() * productArray.length);
        var num3 = Math.floor(Math.random() * productArray.length);
        if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
            numbers.push(num1, num2, num3);      
            uniqueArray.push(num1,num2,num3); 
            break;
        } 
       productArray[num1].views++;
       productArray[num2].views++;
       productArray[num3].views++;
    // } while (uniqueArray > 6) {
    // uniqueArray.shift(); uniqueArray.shift(); uniqueArray.shift();
    // console.log(uniqueArray);
}

    var image1 = path + productArray[num1];   
    var image2 = path + productArray[num2];
    var image3 = path + productArray[num3];

    function displayImages() {
        for (var i = 0; i < numbers.length; i++) {
            var temp;
            var img = document.createElement('img');
            if (i === 0) {
                temp = parentElement1;
                img.setAttribute('src', image1);
                img.setAttribute('alt', productArray[num1]);
            } else if (i === 1) {
                temp = parentElement2;
                img.setAttribute('src', image2);
                img.setAttribute('alt', productArray[num2]);
            } else {
                temp = parentElement3;
                img.setAttribute('src', image3);
                img.setAttribute('alt', productArray[num3]);
            }
            temp.appendChild(img);
        }
    }
    displayImages();

    function inputButtons() {
        for (var j = 0; j < numbers.length; j++) {
            var temp;
            var input = document.createElement('input');
            if (j === 0) {
                temp = parentElement1;
                input.setAttribute('type', 'radio');
                input.setAttribute('id', productArray[num1]);
            } else if (j === 1) {
                temp = parentElement2;
                input.setAttribute('type', 'radio');
                input.setAttribute('id', productArray[num2]);
            } else {
                temp = parentElement3;
                input.setAttribute('type', 'radio');
                input.setAttribute('id', productArray[num3]);
            }
            temp.appendChild(input);
        } 
        function handleClick(){
            document.getElementById(productArray).addEventListener('click', function(){
             this.target.
            });
            }
        }
    }  
    inputButtons();

}
getRandomImage();


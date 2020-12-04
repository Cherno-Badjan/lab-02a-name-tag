const myButton = document.getElementById('my-button');
const myName = document.getElementById('my-name');
const myInput = document.getElementById('my-input');
myButton.addEventListener('click', () => {

    myName.textContent = myInput.value;
    myInput.value = '';
});

const myBox = document.getElementById('box-color');
const myGreen = document.getElementById('my-green');
myGreen.addEventListener('click', () => {

    myBox.style.backgroundColor = 'palegreen';

});
const myOrange = document.getElementById('my-orange');
myOrange.addEventListener('click', () => {

    myBox.style.backgroundColor = 'orange';

});

const myPink = document.getElementById('my-pink');
myPink.addEventListener('click', () => {

    myBox.style.backgroundColor = 'pink';

});
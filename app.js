const myButton = document.getElementById('my-button');
const myName = document.getElementById('my-name');
const myInput = document.getElementById('my-input');

myButton.addEventListener('click', () => {

    
    myName.textContent = myInput.value;
    myInput.value = '';
});
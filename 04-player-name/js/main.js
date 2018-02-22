var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    var name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}
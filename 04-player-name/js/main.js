var para = document.querySelector('p');

para.addEventListener('click', updateName);
// also try out other events like mouseover
function updateName() {
    var name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
    eval(textarea.value);
}

reset.addEventListener('click', function () {
    textarea.value = code;
    userEntry = textarea.value;
    solutionEntry = jsSolution;
    solution.value = 'Show solution';
    updateCode();
});

solution.addEventListener('click', function () {
    if (solution.value === 'Show solution') {
        textarea.value = solutionEntry;
        solution.value = 'Hide solution';
    } else {
        textarea.value = userEntry;
        solution.value = 'Show solution';
    }
    updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nvar searchInput = document.querySelector(\'.output input\');\nvar searchBtn = document.querySelector(\'.output button\');\n\nlist.innerHTML = \'\';\n\nvar myHistory= [];\n\nsearchBtn.onclick = function() {\n if(searchInput.value !== \'\') {\n myHistory.unshift(searchInput.value);\n\n list.innerHTML = \'\';\n\n for(var i = 0; i < myHistory.length; i++) {\n itemText = myHistory[i];\n var listItem = document.createElement(\'li\');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n }\n\n if(myHistory.length >= 5) {\n myHistory.pop();\n }\n\n searchInput.value = \'\';\n searchInput.focus();\n }\n}';
var solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
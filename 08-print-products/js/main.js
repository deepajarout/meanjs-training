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

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nvar totalBox = document.querySelector(\'.output p\');\nvar total = 0;\nlist.innerHTML = \'\';\ntotalBox.textContent = \'\';\n\nvar products = [\'Underpants:6.99\',\n \'Socks:5.99\',\n \'T-shirt:14.99\',\n \'Trousers:31.99\',\n \'Shoes:23.99\'];\n\nfor(var i = 0; i < products.length; i++) {\n var subArray = products[i].split(\':\');\n var name = subArray[0];\n var price = Number(subArray[1]);\n total += price;\n itemText = name + \' — $\' + price;\n\n var listItem = document.createElement(\'li\');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n}\n\ntotalBox.textContent = \'Total: $\' + total.toFixed(2);';
var solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
    if (e.keyCode === 9) {
        e.preventDefault();
        insertAtCaret('\t');
    }


    if (e.keyCode === 27) {
        textarea.blur();
    }
};

function insertAtCaret(text) {
    var scrollPos = textarea.scrollTop;
    var caretPos = textarea.selectionStart;

    var front = (textarea.value).substring(0, caretPos);
    var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
    textarea.value = front + text + back;
    caretPos = caretPos + text.length;
    textarea.selectionStart = caretPos;
    textarea.selectionEnd = caretPos;
    textarea.focus();
    textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
    // We only want to save the state when the user code is being shown,
    // not the solution, so that solution is not saved over the user code
    if (solution.value === 'Show solution') {
        userEntry = textarea.value;
    } else {
        solutionEntry = textarea.value;
    }

    updateCode();
};
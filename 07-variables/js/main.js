var geval = eval;
function createInput() {
    var inputDiv = document.createElement('div');
    var inputPara = document.createElement('p');
    var inputForm = document.createElement('input');

    inputDiv.setAttribute('class','input');
    inputPara.textContent = '>';
    inputDiv.appendChild(inputPara);
    inputDiv.appendChild(inputForm);
    document.body.appendChild(inputDiv);

    if(document.querySelectorAll('div').length > 1) {
    inputForm.focus();
    }

    inputForm.addEventListener('change', executeCode);
}

function executeCode(e) {
    try {
    var result = geval(e.target.value);
    } catch(e) {
    var result = 'error — ' + e.message;
    }

    var outputDiv = document.createElement('div');
    var outputPara = document.createElement('p');

    outputDiv.setAttribute('class','output');
    outputPara.textContent = 'Result: ' + result;
    outputDiv.appendChild(outputPara);
    document.body.appendChild(outputDiv);

    e.target.disabled = true;
    e.target.parentNode.style.opacity = '0.5';

    createInput()
}

createInput();
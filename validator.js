const readline = require('readline');
var index = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Write the text to validate ', (answer) => {
    validate(answer);
  rl.close();
});


function validate(text) {
    try {
        console.log("Validating: " + text);
        validateText(text);
        console.log("Correct");
    } catch (error) {
        console.log(error + ", position: " + index);
    }
}

function getNextLetter(text, index) {
    return text.substring(index, index + 1);
}


function validateText(text) {
    let character = getNextLetter(text, index);
    switch (character) {
        case "(":
            index = index + 1;
            validateText(text);
            character = getNextLetter(text, index);
            if (character != ")") {
                throw "Error, character expected: )";
            }
            index = index + 1;
            validateText(text);
            break;
        case "{":
            index = index + 1;
            validateText(text);
            character = getNextLetter(text, index);
            if (character != "}") {
                throw "Error, character expected: }";
            }
            index = index + 1;
            validateText(text);
            break;
        case "[":
            index = index + 1;
            validateText(text);
            character = getNextLetter(text, index);
            if (character != "]") {
                throw "Error, character expected: ]";
            }
            index = index + 1;
            validateText(text);
            break;
        case "]":
        case "}":
        case ")":
        case "":
			break;
        default:
            throw "Error, character not expected< " + character;
            break;
    }

}
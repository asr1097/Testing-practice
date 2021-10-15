const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = alphabetStr.split("");

const capitalize = (str) => {
    let str1 = str.toLowerCase();
    str1 = str1.charAt(0).toUpperCase() + str1.slice(1);
    return str1;
};

const reverseString = (str) => {
    let str1 = "";
    for (let i = str.length-1; i >= 0; i--) {
        str1 = str1 + str.charAt(i);
    };
    return str1;
};

const calculator = {
    add: (x, y) => {return x + y},

    subtract: (x, y) => {return x - y},

    divide: (x ,y) => {return x / y},

    multiply: (x, y) => {return x * y}
};

const cipher = (str, key) => {

    const strArray = str.split("");

    const isChar = (char) => (/[a-zA-Z]/).test(char);

    const isUpper = (char) => !/[a-z]/.test(char) && /[A-Z]/.test(char);

    const getIndex = (char) => alphabetArray.indexOf(char);

    const getChar = (index) => alphabetArray[index];

    const calcNewChar = (index) => {
        let newIndex =  (index + key) % 26;
        return getChar(newIndex);
    }

    const makeCipherStr = () => {
        let cipherStr = "";

        for (let i = 0; i < strArray.length; i++) {
            let char = strArray[i];
            if (isChar(char)) {
                let lowerChar = char.toLowerCase();
                let index = getIndex(lowerChar);
                let newChar = calcNewChar(index);
                if (isUpper(char)) {newChar = newChar.toUpperCase()};
                cipherStr = cipherStr + newChar;
            } else {cipherStr = cipherStr + char}}

        return cipherStr;    
    }

    let newString = makeCipherStr();
    return newString;
} 

export {
    capitalize,
    reverseString,
    calculator,
    cipher,
}
